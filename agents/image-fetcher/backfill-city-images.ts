import { config as loadEnv } from "dotenv";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { fetchCityImage } from "./unsplash.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const agentsRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(__dirname, "..", "..");
const citiesPath = path.join(repoRoot, "site", "data", "cities.ts");
const cityImagesPath = path.join(repoRoot, "site", "data", "cityImages.ts");

loadEnv({ path: path.join(agentsRoot, ".env") });
loadEnv({ path: path.join(agentsRoot, "discovery-agent", ".env") });
loadEnv();

type City = {
  slug: string;
  name: string;
  country: string;
};

type CityImageRecord = {
  city_image_url?: string;
  image_author?: string;
  image_source: "unsplash" | "placeholder" | "legacy";
};

function parseCities(ts: string): City[] {
  const regex =
    /\{\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*country:\s*"([^"]+)",\s*latitude:\s*[-0-9.]+,\s*longitude:\s*[-0-9.]+\s*\}/g;
  return Array.from(ts.matchAll(regex)).map((match) => ({
    slug: match[1],
    name: match[2],
    country: match[3],
  }));
}

function parseCityImageMap(ts: string): Record<string, CityImageRecord> {
  const map: Record<string, CityImageRecord> = {};
  const mapRegex = /["']?([a-z0-9-]+)["']?\s*:\s*\{([\s\S]*?)\},/g;

  for (const match of ts.matchAll(mapRegex)) {
    const slug = match[1];
    const body = match[2];
    const urlMatch = body.match(/city_image_url:\s*"([^"]+)"/);
    const authorMatch = body.match(/image_author:\s*"([^"]+)"/);
    const sourceMatch = body.match(/image_source:\s*"([^"]+)"/);

    if (!sourceMatch) continue;

    map[slug] = {
      city_image_url: urlMatch?.[1],
      image_author: authorMatch?.[1],
      image_source: sourceMatch[1] as CityImageRecord["image_source"],
    };
  }

  return map;
}

function renderEntry(slug: string, record: CityImageRecord): string {
  const lines: string[] = [`  "${slug}": {`];
  if (record.city_image_url) {
    lines.push(`    city_image_url: ${JSON.stringify(record.city_image_url)},`);
  }
  if (record.image_author) {
    lines.push(`    image_author: ${JSON.stringify(record.image_author)},`);
  }
  lines.push(`    image_source: ${JSON.stringify(record.image_source)},`);
  lines.push("  },");
  return lines.join("\n");
}

function renderFile(records: Record<string, CityImageRecord>): string {
  const cityOrder = Object.keys(records);
  const extraSlugs = Object.keys(records)
    .filter((slug) => !cityOrder.includes(slug))
    .sort();
  const orderedSlugs = [...cityOrder, ...extraSlugs];

  const entries = orderedSlugs
    .filter((slug) => records[slug])
    .map((slug) => renderEntry(slug, records[slug]))
    .join("\n");

  return `export type CityImageSource = "unsplash" | "placeholder" | "legacy";

export type CityImageRecord = {
  city_image_url?: string;
  image_author?: string;
  image_source: CityImageSource;
};

export const CITY_IMAGE_MAP: Record<string, CityImageRecord> = {
${entries}
};

export function getCityImage(citySlug: string): CityImageRecord | undefined {
  return CITY_IMAGE_MAP[citySlug];
}

export function getCityImageUrl(citySlug: string): string | undefined {
  return CITY_IMAGE_MAP[citySlug]?.city_image_url;
}
`;
}

async function main() {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) {
    throw new Error("UNSPLASH_ACCESS_KEY is missing.");
  }

  const [citiesRaw, cityImagesRaw] = await Promise.all([
    fs.readFile(citiesPath, "utf8"),
    fs.readFile(cityImagesPath, "utf8"),
  ]);

  const cities = parseCities(citiesRaw);
  const parsedMap = parseCityImageMap(cityImagesRaw);

  const updatedMap: Record<string, CityImageRecord> = { ...parsedMap };
  const needsBackfill = cities.filter((city) => {
    const current = updatedMap[city.slug];
    return !current?.city_image_url || current.image_source === "placeholder";
  });

  if (!needsBackfill.length) {
    console.log("[backfill-city-images] All cities already have images.");
    return;
  }

  console.log(`[backfill-city-images] Cities requiring backfill: ${needsBackfill.length}`);

  let updated = 0;
  for (const city of needsBackfill) {
    const image = await fetchCityImage(city.name, city.country, accessKey);
    if (image.city_image_url) {
      updatedMap[city.slug] = image;
      updated += 1;
      console.log(`[backfill-city-images] Added image for ${city.name}`);
    } else {
      updatedMap[city.slug] = { image_source: "placeholder" };
      console.log(`[backfill-city-images] Placeholder kept for ${city.name}`);
    }
  }

  // Preserve city order from cities.ts first, then extras.
  const ordered: Record<string, CityImageRecord> = {};
  for (const city of cities) {
    if (updatedMap[city.slug]) {
      ordered[city.slug] = updatedMap[city.slug];
    }
  }
  for (const [slug, value] of Object.entries(updatedMap)) {
    if (!ordered[slug]) {
      ordered[slug] = value;
    }
  }

  await fs.writeFile(cityImagesPath, renderFile(ordered), "utf8");
  console.log(`[backfill-city-images] Done. Updated ${updated} cities.`);
}

main().catch((error) => {
  console.error("[backfill-city-images] Failed:", error);
  process.exitCode = 1;
});
