export type TourType = {
  name: string;
  slug: string;
};

export const TOUR_TYPES: TourType[] = [
  { name: "Walking tours", slug: "walking" },
  { name: "Food tours", slug: "food" },
  { name: "Private tours", slug: "private" },
  { name: "Historical tours", slug: "historical" },
  { name: "Night tours", slug: "night" },
  { name: "Photography tours", slug: "photography" },
  { name: "Bike tours", slug: "bike" },
  { name: "Family tours", slug: "family" },
];

export function getTourTypeBySlug(slug: string): TourType | undefined {
  const normalized = slug.trim().toLowerCase();
  return TOUR_TYPES.find((t) => t.slug === normalized);
}

export function tourTypePath(tourTypeSlug: string): string {
  return `/${tourTypeSlug.trim().toLowerCase()}-tours`;
}

export function tourTypeCityPath(tourTypeSlug: string, citySlug: string): string {
  return `/${tourTypeSlug.trim().toLowerCase()}-tours-${citySlug.trim().toLowerCase()}`;
}

