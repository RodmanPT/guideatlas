export type City = {
  slug: string;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
};

export const CITIES: City[] = [
  { slug: "lisbon", name: "Lisbon", country: "Portugal", latitude: 38.7223, longitude: -9.1393 },
  { slug: "porto", name: "Porto", country: "Portugal", latitude: 41.1579, longitude: -8.6291 },
  { slug: "madrid", name: "Madrid", country: "Spain", latitude: 40.4168, longitude: -3.7038 },
  { slug: "barcelona", name: "Barcelona", country: "Spain", latitude: 41.3851, longitude: 2.1734 },
  { slug: "rome", name: "Rome", country: "Italy", latitude: 41.9028, longitude: 12.4964 },
  { slug: "paris", name: "Paris", country: "France", latitude: 48.8566, longitude: 2.3522 },
  { slug: "london", name: "London", country: "United Kingdom", latitude: 51.5074, longitude: -0.1278 },
  { slug: "tokyo", name: "Tokyo", country: "Japan", latitude: 35.6762, longitude: 139.6503 },
  { slug: "bangkok", name: "Bangkok", country: "Thailand", latitude: 13.7563, longitude: 100.5018 },
  { slug: "new-york", name: "New York", country: "United States", latitude: 40.7128, longitude: -74.006 },
  { slug: "berlin", name: "Berlin", country: "Germany", latitude: 52.52, longitude: 13.405 },
  { slug: "amsterdam", name: "Amsterdam", country: "Netherlands", latitude: 52.3676, longitude: 4.9041 },
  { slug: "vienna", name: "Vienna", country: "Austria", latitude: 48.2082, longitude: 16.3738 },
  { slug: "prague", name: "Prague", country: "Czech Republic", latitude: 50.0755, longitude: 14.4378 },
  { slug: "istanbul", name: "Istanbul", country: "Turkey", latitude: 41.0082, longitude: 28.9784 },
  { slug: "dubai", name: "Dubai", country: "United Arab Emirates", latitude: 25.2048, longitude: 55.2708 },
  { slug: "mexico-city", name: "Mexico City", country: "Mexico", latitude: 19.4326, longitude: -99.1332 },
  { slug: "sydney", name: "Sydney", country: "Australia", latitude: -33.8688, longitude: 151.2093 },
  { slug: "seoul", name: "Seoul", country: "South Korea", latitude: 37.5665, longitude: 126.978 },
  { slug: "athens", name: "Athens", country: "Greece", latitude: 37.9838, longitude: 23.7275 },
];

export function getCityBySlug(slug: string): City | undefined {
  const normalized = slug.trim().toLowerCase();
  return CITIES.find((c) => c.slug === normalized);
}
