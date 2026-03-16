export type City = {
  name: string;
  slug: string;
  country: string;
};

export const CITIES: City[] = [
  { name: "Lisbon", slug: "lisbon", country: "Portugal" },
  { name: "Porto", slug: "porto", country: "Portugal" },
  { name: "Madrid", slug: "madrid", country: "Spain" },
  { name: "Barcelona", slug: "barcelona", country: "Spain" },
  { name: "Rome", slug: "rome", country: "Italy" },
  { name: "Paris", slug: "paris", country: "France" },
  { name: "London", slug: "london", country: "United Kingdom" },
  { name: "Tokyo", slug: "tokyo", country: "Japan" },
  { name: "Bangkok", slug: "bangkok", country: "Thailand" },
  { name: "New York", slug: "new-york", country: "United States" },
];

export function getCityBySlug(slug: string): City | undefined {
  const normalized = slug.trim().toLowerCase();
  return CITIES.find((c) => c.slug === normalized);
}

export function cityToursPath(citySlug: string): string {
  return `/${citySlug.trim().toLowerCase()}-tours`;
}

