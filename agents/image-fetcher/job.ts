import "dotenv/config";

import { fetchCityImage } from "./unsplash.js";
import { toSlug } from "../../shared/utils/helpers.ts";

async function main() {
  const city = process.env.CITY_NAME;
  const country = process.env.COUNTRY_NAME;

  if (!city || !country) {
    console.log("[image-fetcher] No CITY_NAME/COUNTRY_NAME provided. Skipping.");
    return;
  }

  const image = await fetchCityImage(city, country);
  console.log(
    JSON.stringify(
      {
        slug: toSlug(city),
        city,
        country,
        ...image,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error("[image-fetcher] Failed:", error);
  process.exitCode = 1;
});
