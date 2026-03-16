import { spawn } from "node:child_process";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LOCK_FILE = path.join(os.tmpdir(), "guideatlas-discovery-agent.lock");

loadEnv({ path: path.join(__dirname, ".env") });
loadEnv();

async function acquireLock() {
  try {
    const handle = await fs.open(LOCK_FILE, "wx");
    await handle.close();
    return true;
  } catch {
    return false;
  }
}

async function releaseLock() {
  await fs.rm(LOCK_FILE, { force: true });
}

function runPythonJob(): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn("python", ["discovery_agent.py"], {
      cwd: __dirname,
      stdio: "inherit",
      env: process.env,
    });

    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Python discovery agent exited with code ${code ?? -1}`));
    });
  });
}

async function main() {
  const locked = await acquireLock();
  if (!locked) {
    console.log("[discovery-agent] Another run is in progress. Exiting.");
    return;
  }

  try {
    console.log("[discovery-agent] Starting job...");
    await runPythonJob();
    console.log("[discovery-agent] Completed.");
  } finally {
    await releaseLock();
  }
}

main().catch((error) => {
  console.error("[discovery-agent] Failed:", error);
  process.exitCode = 1;
});
