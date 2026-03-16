export type UnsplashCityImage = {
  city_image_url?: string;
  image_author?: string;
  image_source: "unsplash" | "placeholder";
};

const SEARCH_ENDPOINT = "https://api.unsplash.com/search/photos";

function buildQueries(city: string, country: string): string[] {
  return [
    `${city} skyline`,
    `${city} cityscape`,
    `${city} downtown`,
    `${country} city skyline`,
  ];
}

export async function fetchCityImage(
  city: string,
  country: string,
  accessKey = process.env.UNSPLASH_ACCESS_KEY,
): Promise<UnsplashCityImage> {
  if (!accessKey) {
    return { image_source: "placeholder" };
  }

  for (const query of buildQueries(city, country)) {
    const url = new URL(SEARCH_ENDPOINT);
    url.searchParams.set("query", query);
    url.searchParams.set("orientation", "landscape");
    url.searchParams.set("per_page", "5");

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
          "Accept-Version": "v1",
          "User-Agent": "GuideAtlasImageFetcher/1.0",
        },
      });

      if (!response.ok) {
        continue;
      }

      const payload = (await response.json()) as {
        results?: Array<{
          urls?: Record<string, string>;
          user?: { name?: string };
        }>;
      };

      const candidate = payload.results?.[0];
      const imageUrl =
        candidate?.urls?.regular ??
        candidate?.urls?.full ??
        candidate?.urls?.raw ??
        candidate?.urls?.small;

      if (!imageUrl) {
        continue;
      }

      return {
        city_image_url: imageUrl,
        image_author: candidate?.user?.name?.trim(),
        image_source: "unsplash",
      };
    } catch {
      continue;
    }
  }

  return { image_source: "placeholder" };
}
