const fs = require("fs");
const path = require("path");

const { DAILY_INTERVAL_MS, candidateDestinations } = require("./config");
const { generateTours, getSeoIntro } = require("./generator");
const {
  getDataFilePaths,
  parseExistingCitySlugs,
  updateCitiesFile,
  updateAiToursFile,
  updateSeoIntrosFile,
  read,
} = require("./fileUpdater");
const { triggerRebuild } = require("./rebuild");

const repoRoot = path.resolve(__dirname, "..", "..");

function pickDestination(knownSlugs) {
  return candidateDestinations.find(
    (city) => !knownSlugs.has(city.slug),
  );
}

async function runCycle() {
  console.log("[ai-discovery-agent] Starting cycle...");

  const { citiesPath, aiToursPath, seoPath } = getDataFilePaths(repoRoot);
  const currentCities = read(citiesPath);
  const knownSlugs = parseExistingCitySlugs(currentCities);

  const destination = pickDestination(knownSlugs);
  if (!destination) {
    console.log("[ai-discovery-agent] No new destinations available.");
    return;
  }

  const tours = generateTours(destination.name, destination.slug);
  const seoIntro = getSeoIntro(destination.name);

  const cityChanged = updateCitiesFile(citiesPath, destination);
  const toursChanged = updateAiToursFile(aiToursPath, destination.slug, tours);
  const seoChanged = updateSeoIntrosFile(seoPath, destination.slug, seoIntro);

  if (!cityChanged && !toursChanged && !seoChanged) {
    console.log("[ai-discovery-agent] Destination already present, skipping.");
    return;
  }

  await triggerRebuild(repoRoot);
  console.log(`[ai-discovery-agent] Added ${destination.name} and triggered rebuild.`);
}

async function main() {
  const runOnce = process.argv.includes("--once") || process.env.RUN_ONCE === "true";

  await runCycle();
  if (runOnce) return;

  console.log(`[ai-discovery-agent] Sleeping for ${DAILY_INTERVAL_MS}ms between runs.`);
  setInterval(() => {
    runCycle().catch((error) => {
      console.error("[ai-discovery-agent] Cycle failed:", error);
    });
  }, DAILY_INTERVAL_MS);
}

main().catch((error) => {
  console.error("[ai-discovery-agent] Fatal error:", error);
  process.exitCode = 1;
});
