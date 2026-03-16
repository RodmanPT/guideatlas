export type CuratedTour = {
  title: string;
  duration: string;
  description: string;
};

export type CityToursMap = Record<string, CuratedTour[]>;

export const aiTours: CityToursMap = {  "berlin": [
    {
      title: "Berlin Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Berlin.",
    },
    {
      title: "Berlin History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Berlin.",
    },
    {
      title: "Berlin Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Berlin.",
    },
  ],
};

export function getAiToursByCity(citySlug: string): CuratedTour[] {
  return aiTours[citySlug] ?? [];
}
