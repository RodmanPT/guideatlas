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
  "amsterdam": [
    {
      title: "Amsterdam Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Amsterdam with curated tasting stops.",
    },
    {
      title: "Amsterdam History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Amsterdam.",
    },
    {
      title: "Amsterdam Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Amsterdam.",
    },
    {
      title: "Hidden Corners of Amsterdam",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Amsterdam.",
    },
  ],
};

export function getAiToursByCity(citySlug: string): CuratedTour[] {
  return aiTours[citySlug] ?? [];
}
