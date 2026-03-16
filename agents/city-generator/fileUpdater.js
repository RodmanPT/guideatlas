const fs = require("fs");
const path = require("path");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function write(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

function cityLine(destination) {
  return `  { slug: "${destination.slug}", name: "${destination.name}", country: "${destination.country}", latitude: ${destination.latitude}, longitude: ${destination.longitude} },`;
}

function aiTourBlock(slug, tours) {
  const rows = tours
    .map(
      (tour) => `    {
      title: "${tour.title.replace(/"/g, '\\"')}",
      duration: "${tour.duration.replace(/"/g, '\\"')}",
      description: "${tour.description.replace(/"/g, '\\"')}",
    },`,
    )
    .join("\n");

  return `  "${slug}": [
${rows}
  ],`;
}

function seoIntroLine(slug, intro) {
  return `  "${slug}": "${intro.replace(/"/g, '\\"')}",`;
}

function parseExistingCitySlugs(citiesContent) {
  return new Set(
    Array.from(citiesContent.matchAll(/slug:\s*"([^"]+)"/g))
      .map((m) => m[1].trim().toLowerCase())
      .filter(Boolean),
  );
}

function parseExistingAiTourSlugs(aiToursContent) {
  return new Set(
    Array.from(aiToursContent.matchAll(/^\s*"([^"]+)":\s*\[/gm))
      .map((m) => m[1].trim().toLowerCase())
      .filter(Boolean),
  );
}

function parseExistingSeoIntroSlugs(seoContent) {
  return new Set(
    Array.from(seoContent.matchAll(/^\s*"([^"]+)":\s*"/gm))
      .map((m) => m[1].trim().toLowerCase())
      .filter(Boolean),
  );
}

function insertBeforeAnchor(content, anchor, snippet) {
  let index = content.indexOf(anchor);
  if (index === -1) {
    const fnMatch = anchor.match(/export function [A-Za-z0-9_]+/);
    if (fnMatch) {
      const fnIndex = content.indexOf(fnMatch[0]);
      if (fnIndex !== -1) {
        const closeWithSemi = content.lastIndexOf("};", fnIndex);
        if (closeWithSemi !== -1) {
          index = closeWithSemi;
        } else {
          const closeBrace = content.lastIndexOf("}", fnIndex);
          index = closeBrace !== -1 ? closeBrace : fnIndex;
        }
      }
    }
  }
  if (index === -1) {
    throw new Error(`Could not find insertion anchor: ${anchor}`);
  }
  return `${content.slice(0, index)}${snippet}\n${content.slice(index)}`;
}

function updateCitiesFile(citiesPath, destination) {
  const content = read(citiesPath);
  const existingSlugs = parseExistingCitySlugs(content);
  if (existingSlugs.has(destination.slug)) return false;

  const updated = insertBeforeAnchor(content, "];\n\nexport function getCityBySlug", cityLine(destination));
  write(citiesPath, updated);
  return true;
}

function updateAiToursFile(aiToursPath, destinationSlug, tours) {
  const content = read(aiToursPath);
  const existingSlugs = parseExistingAiTourSlugs(content);
  if (existingSlugs.has(destinationSlug)) return false;

  const updated = insertBeforeAnchor(
    content,
    "};\n\nexport function getAiToursByCity",
    aiTourBlock(destinationSlug, tours),
  );
  write(aiToursPath, updated);
  return true;
}

function updateSeoIntrosFile(seoPath, destinationSlug, intro) {
  const content = read(seoPath);
  const existingSlugs = parseExistingSeoIntroSlugs(content);
  if (existingSlugs.has(destinationSlug)) return false;

  const updated = insertBeforeAnchor(
    content,
    "};\n\nexport function getCitySeoIntro",
    seoIntroLine(destinationSlug, intro),
  );
  write(seoPath, updated);
  return true;
}

function getDataFilePaths(repoRoot) {
  return {
    citiesPath: path.join(repoRoot, "site", "data", "cities.ts"),
    aiToursPath: path.join(repoRoot, "site", "data", "aiTours.ts"),
    seoPath: path.join(repoRoot, "site", "data", "citySeoIntros.ts"),
  };
}

module.exports = {
  getDataFilePaths,
  parseExistingCitySlugs,
  updateCitiesFile,
  updateAiToursFile,
  updateSeoIntrosFile,
  read,
};
