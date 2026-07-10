const http = require("http");
const net = require("net");

const RELAY_HOST = process.env.RELAY1_HOST || "192.168.1.200";
const RELAY_PORT = Number(process.env.RELAY1_PORT || 4196);
const BRIDGE_PORT = Number(process.env.RELAY_BRIDGE_PORT || 8765);

const panel1RelayMap = {
  "BE-6300": 0,
  "BE-6302": 1,
  "BE-6335": 2,
  "BE-6311": 3,
  "TS-6303": 4,
  "TS-6314": 4,
  "TS-6307": 5,
  "TS-6310": 5,
  "HS-6308": 6,
  "HS-6309": 6,
  "HS-6312": 6,
  "HS-6363": 7,
  "HS-6305": 8,
  "PSH-6348A": 9,
  "PSHH-6348B": 10,
  "ZS-6364": 11,
};

function crc16(buffer) {
  let crc = 0xffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let i = 0; i < 8; i += 1) {
      crc = crc & 1 ? (crc >> 1) ^ 0xa001 : crc >> 1;
    }
  }
  return Buffer.from([crc & 0xff, (crc >> 8) & 0xff]);
}

function rtuRequest(pdu) {
  const body = Buffer.from(pdu);
  return Buffer.concat([body, crc16(body)]);
}

function sendRtu(pdu) {
  const request = rtuRequest(pdu);
  return new Promise((resolve, reject) => {
    const socket = net.createConnection({ host: RELAY_HOST, port: RELAY_PORT });
    const chunks = [];
    const timeout = setTimeout(() => {
      socket.destroy();
      reject(new Error("Relay module timeout"));
    }, 2500);

    socket.on("connect", () => socket.write(request));
    socket.on("data", (chunk) => {
      chunks.push(chunk);
      clearTimeout(timeout);
      socket.end();
      resolve(Buffer.concat(chunks));
    });
    socket.on("error", (error) => {
      clearTimeout(timeout);
      reject(error);
    });
    socket.on("close", () => {
      clearTimeout(timeout);
      if (!chunks.length) {
        reject(new Error("Relay module returned no response"));
      }
    });
  });
}

async function writeCoil(channel, state) {
  const value = state ? 0xff00 : 0x0000;
  return sendRtu([0x01, 0x05, (channel >> 8) & 0xff, channel & 0xff, (value >> 8) & 0xff, value & 0xff]);
}

async function readCoils() {
  return sendRtu([0x01, 0x01, 0x00, 0x00, 0x00, 0x10]);
}

async function resetAllCoils() {
  return sendRtu([0x01, 0x0f, 0x00, 0x00, 0x00, 0x10, 0x02, 0x00, 0x00]);
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
  try {
    if (url.pathname === "/health") {
      const rx = await readCoils();
      sendJson(response, 200, { ok: true, relayHost: RELAY_HOST, relayPort: RELAY_PORT, rx: rx.toString("hex").toUpperCase() });
      return;
    }

    if (url.pathname === "/relay") {
      const tag = String(url.searchParams.get("tag") || "").toUpperCase();
      const state = String(url.searchParams.get("state") || "on").toLowerCase() !== "off";
      const channel = panel1RelayMap[tag];
      if (channel === undefined) {
        sendJson(response, 400, { ok: false, error: `No Panel 1 relay channel mapped for ${tag}` });
        return;
      }
      const rx = await writeCoil(channel, state);
      sendJson(response, 200, { ok: true, tag, channel: channel + 1, state, rx: rx.toString("hex").toUpperCase() });
      return;
    }

    if (url.pathname === "/reset") {
      const rx = await resetAllCoils();
      sendJson(response, 200, { ok: true, state: "all-off", rx: rx.toString("hex").toUpperCase() });
      return;
    }

    sendJson(response, 404, { ok: false, error: "Unknown endpoint" });
  } catch (error) {
    sendJson(response, 502, { ok: false, error: error.message });
  }
});

server.listen(BRIDGE_PORT, "127.0.0.1", () => {
  console.log(`Relay bridge listening on http://127.0.0.1:${BRIDGE_PORT}`);
  console.log(`Relay Module-1 target ${RELAY_HOST}:${RELAY_PORT}`);
});
