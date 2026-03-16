import "dotenv/config";

import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { config as loadEnv } from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const agentsRoot = path.resolve(__dirname, "..");

loadEnv({ path: path.join(agentsRoot, ".env") });
loadEnv();

function runCommand(command: string, args: string[], cwd: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: "inherit",
      env: process.env,
    });

    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Command failed with exit code ${code ?? -1}`));
    });
  });
}

async function main() {
  console.log("[city-generator] Starting idempotent job run...");
  await runCommand("node", ["agent.js", "--once"], __dirname);
  console.log("[city-generator] Completed.");
}

main().catch((error) => {
  console.error("[city-generator] Failed:", error);
  process.exitCode = 1;
});
