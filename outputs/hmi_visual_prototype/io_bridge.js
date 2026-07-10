const http = require("http");
const net = require("net");

const BRIDGE_PORT = Number(process.env.IO_BRIDGE_PORT || 8771);
const UNIT_ID = Number(process.env.IO_UNIT_ID || 1);
const READ_FUNCTION = String(process.env.IO_READ_FUNCTION || "auto").toLowerCase();
const START_ADDRESS_SETTING = String(process.env.IO_START_ADDRESS || "auto").toLowerCase();
const INPUT_COUNT = Number(process.env.IO_INPUT_COUNT || 8);
const LOGICAL_START = Number(process.env.IO_LOGICAL_START || 11);
const START_ADDRESSES = START_ADDRESS_SETTING === "auto"
  ? [10, 0, 11, 8]
  : [Number(START_ADDRESS_SETTING) || 0];

const modules = {
  io1: {
    label: "I/O Module-1",
    host: process.env.IO1_HOST || "192.168.1.202",
    port: Number(process.env.IO1_PORT || 502),
  },
  io2: {
    label: "I/O Module-2",
    host: process.env.IO2_HOST || "192.168.1.203",
    port: Number(process.env.IO2_PORT || 502),
  },
};

let transactionId = 1;

function modbusTcpRequest(functionCode, startAddress, quantity) {
  const pdu = Buffer.from([
    functionCode,
    (startAddress >> 8) & 0xff,
    startAddress & 0xff,
    (quantity >> 8) & 0xff,
    quantity & 0xff,
  ]);
  const header = Buffer.alloc(7);
  header.writeUInt16BE(transactionId++ & 0xffff, 0);
  header.writeUInt16BE(0, 2);
  header.writeUInt16BE(pdu.length + 1, 4);
  header.writeUInt8(UNIT_ID, 6);
  return Buffer.concat([header, pdu]);
}

function sendModbus(moduleConfig, request) {
  return new Promise((resolve, reject) => {
    const socket = net.createConnection({ host: moduleConfig.host, port: moduleConfig.port });
    const chunks = [];
    const timeout = setTimeout(() => {
      socket.destroy();
      reject(new Error(`${moduleConfig.label} timeout`));
    }, 2500);

    socket.on("connect", () => socket.write(request));
    socket.on("data", (chunk) => {
      chunks.push(chunk);
      const response = Buffer.concat(chunks);
      if (response.length >= 9) {
        const byteCount = response[8];
        if (response.length >= 9 + byteCount) {
          clearTimeout(timeout);
          socket.end();
          resolve(response);
        }
      }
    });
    socket.on("error", (error) => {
      clearTimeout(timeout);
      reject(error);
    });
    socket.on("close", () => {
      clearTimeout(timeout);
      if (!chunks.length) reject(new Error(`${moduleConfig.label} returned no response`));
    });
  });
}

function parseInputResponse(response, inputCount, logicalStart = LOGICAL_START) {
  const functionCode = response[7];
  if (functionCode & 0x80) throw new Error(`Modbus exception ${response[8]}`);
  const byteCount = response[8];
  const bytes = response.subarray(9, 9 + byteCount);
  const di = {};
  for (let i = 0; i < inputCount; i += 1) {
    const active = Boolean(bytes[Math.floor(i / 8)] & (1 << (i % 8)));
    di[`DI${logicalStart + i}`] = active;
  }
  return { di, functionCode, byteCount };
}

async function readWithFunction(moduleConfig, functionCode, startAddress) {
  const request = modbusTcpRequest(functionCode, startAddress, INPUT_COUNT);
  const response = await sendModbus(moduleConfig, request);
  return { response, startAddress, ...parseInputResponse(response, INPUT_COUNT, LOGICAL_START) };
}

async function readInputs(moduleName) {
  const moduleConfig = modules[moduleName];
  if (!moduleConfig) throw new Error(`Unknown module ${moduleName}`);
  const functionsToTry = READ_FUNCTION === "auto" ? [2, 1] : [Number(READ_FUNCTION) || 2];
  const errors = [];
  let result = null;
  for (const startAddress of START_ADDRESSES) {
    for (const functionCode of functionsToTry) {
      try {
        result = await readWithFunction(moduleConfig, functionCode, startAddress);
        break;
      } catch (error) {
        errors.push(`FC${functionCode}@${startAddress}: ${error.message}`);
      }
    }
    if (result) break;
  }
  if (!result) throw new Error(errors.join("; "));
  const activeInputs = Array.from({ length: INPUT_COUNT }, (_, index) => `DI${LOGICAL_START + index}`).filter((point) => result.di[point]);
  return {
    ok: true,
    module: moduleName,
    label: moduleConfig.label,
    host: moduleConfig.host,
    port: moduleConfig.port,
    unitId: UNIT_ID,
    functionCode: result.functionCode,
    startAddress: result.startAddress,
    triedStartAddresses: START_ADDRESSES,
    inputCount: INPUT_COUNT,
    logicalStart: LOGICAL_START,
    activeInputs,
    di: result.di,
    rx: result.response.toString("hex").toUpperCase(),
  };
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  response.end(JSON.stringify(payload));
}

const server = http.createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    sendJson(response, 200, { ok: true });
    return;
  }

  const url = new URL(request.url, `http://${request.headers.host}`);
  const moduleName = String(url.searchParams.get("module") || "io1").toLowerCase();

  try {
    if (url.pathname === "/health" || url.pathname === "/inputs") {
      sendJson(response, 200, await readInputs(moduleName));
      return;
    }
    sendJson(response, 404, { ok: false, error: "Unknown endpoint" });
  } catch (error) {
    sendJson(response, 502, { ok: false, module: moduleName, error: error.message });
  }
});

server.listen(BRIDGE_PORT, "127.0.0.1", () => {
  console.log(`I/O bridge listening on http://127.0.0.1:${BRIDGE_PORT}`);
  console.log(`I/O Module-1 target ${modules.io1.host}:${modules.io1.port}`);
  console.log(`I/O Module-2 target ${modules.io2.host}:${modules.io2.port}`);
  console.log(`Reading panel DI${LOGICAL_START}-DI${LOGICAL_START + INPUT_COUNT - 1}`);
  console.log(`Modbus function ${READ_FUNCTION}, unit ${UNIT_ID}, start ${START_ADDRESS_SETTING}, tried starts ${START_ADDRESSES.join(", ")}`);
});
