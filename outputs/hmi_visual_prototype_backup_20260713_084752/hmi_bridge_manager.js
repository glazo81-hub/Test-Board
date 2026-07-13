const http = require("http");
const { spawn } = require("child_process");
const path = require("path");

const MANAGER_PORT = Number(process.env.HMI_BRIDGE_MANAGER_PORT || 8780);
const baseDir = __dirname;
const children = {};

function startProcess(key, script, env = {}) {
  if (children[key] && !children[key].killed && children[key].exitCode === null) {
    return { key, started: false, running: true, message: `${key} already running` };
  }

  const child = spawn(process.execPath, [path.join(baseDir, script)], {
    cwd: baseDir,
    env: { ...process.env, ...env },
    windowsHide: false,
    stdio: "ignore",
  });

  children[key] = child;
  child.on("exit", () => {
    if (children[key] === child) delete children[key];
  });

  return { key, started: true, running: true, message: `${key} started` };
}

function stopProcess(key) {
  const child = children[key];
  if (!child) return { key, stopped: false, running: false, message: `${key} is not running` };
  child.kill();
  delete children[key];
  return { key, stopped: true, running: false, message: `${key} stopped` };
}

function status() {
  return Object.fromEntries(
    ["relay1", "io"].map((key) => {
      const child = children[key];
      return [key, Boolean(child && !child.killed && child.exitCode === null)];
    })
  );
}

function startTarget(target) {
  const actions = [];
  if (target === "panel1" || target === "all") {
    actions.push(startProcess("relay1", "relay_bridge.js"));
    actions.push(startProcess("io", "io_bridge.js"));
  } else if (target === "panel2") {
    actions.push(startProcess("io", "io_bridge.js"));
  } else if (target === "io") {
    actions.push(startProcess("io", "io_bridge.js"));
  } else if (target === "relay1") {
    actions.push(startProcess("relay1", "relay_bridge.js"));
  } else {
    throw new Error(`Unknown target ${target}`);
  }
  return actions;
}

function stopTarget(target) {
  const actions = [];
  if (target === "all" || target === "panel1" || target === "relay1") actions.push(stopProcess("relay1"));
  if (target === "all" || target === "panel1" || target === "panel2" || target === "io") actions.push(stopProcess("io"));
  return actions;
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

const server = http.createServer((request, response) => {
  if (request.method === "OPTIONS") {
    sendJson(response, 200, { ok: true });
    return;
  }

  const url = new URL(request.url, `http://${request.headers.host}`);
  try {
    if (url.pathname === "/health") {
      sendJson(response, 200, { ok: true, status: status() });
      return;
    }
    if (url.pathname === "/start") {
      const target = String(url.searchParams.get("target") || "all").toLowerCase();
      sendJson(response, 200, { ok: true, target, actions: startTarget(target), status: status() });
      return;
    }
    if (url.pathname === "/restart") {
      const target = String(url.searchParams.get("target") || "all").toLowerCase();
      const stopped = stopTarget(target);
      setTimeout(() => {
        try {
          startTarget(target);
        } catch {
          // The client will see status on the next health/read request.
        }
      }, 500);
      sendJson(response, 200, { ok: true, target, actions: stopped, status: status(), message: "Restart requested" });
      return;
    }
    if (url.pathname === "/stop") {
      const target = String(url.searchParams.get("target") || "all").toLowerCase();
      const actions = stopTarget(target);
      sendJson(response, 200, { ok: true, target, actions, status: status() });
      return;
    }
    sendJson(response, 404, { ok: false, error: "Unknown endpoint" });
  } catch (error) {
    sendJson(response, 500, { ok: false, error: error.message, status: status() });
  }
});

server.listen(MANAGER_PORT, "127.0.0.1", () => {
  console.log(`HMI bridge manager listening on http://127.0.0.1:${MANAGER_PORT}`);
  console.log("Use /start?target=panel1, /start?target=panel2, /start?target=all");
});
