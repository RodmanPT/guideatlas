const { spawnSync } = require("child_process");

async function triggerNetlifyRebuild() {
  const hook = process.env.NETLIFY_BUILD_HOOK_URL;
  if (!hook) return false;

  const response = await fetch(hook, { method: "POST" });
  if (!response.ok) {
    throw new Error(`Failed to trigger Netlify rebuild: ${response.status}`);
  }
  return true;
}

function runLocalBuild(repoRoot) {
  const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
  const result = spawnSync(npmCmd, ["run", "build"], {
    cwd: `${repoRoot}/site`,
    stdio: "inherit",
  });

  if (result.status !== 0) {
    throw new Error("Local build failed.");
  }
}

async function triggerRebuild(repoRoot) {
  const netlifyTriggered = await triggerNetlifyRebuild();
  if (!netlifyTriggered) {
    runLocalBuild(repoRoot);
  }
}

module.exports = {
  triggerRebuild,
};
