import { spawn } from "node:child_process";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const agentsRoot = path.resolve(__dirname, "..");
const LOCK_FILE = path.join(os.tmpdir(), "guideatlas-guide-inviter.lock");

loadEnv({ path: path.join(agentsRoot, ".env") });
loadEnv({ path: path.join(__dirname, ".env"), override: true });
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

function runPythonJob(args: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn("python", ["agent.py", ...args], {
      cwd: __dirname,
      stdio: "inherit",
      env: process.env,
    });

    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Python guide inviter exited with code ${code ?? -1}`));
    });
  });
}

async function main() {
  const locked = await acquireLock();
  if (!locked) {
    console.log("[guide-inviter] Another run is already in progress. Exiting.");
    return;
  }

  try {
    console.log("[guide-inviter] Starting job...");
    await runPythonJob(process.argv.slice(2));
    console.log("[guide-inviter] Completed.");
  } finally {
    await releaseLock();
  }
}

main().catch((error) => {
  console.error("[guide-inviter] Failed:", error);
  process.exitCode = 1;
});
