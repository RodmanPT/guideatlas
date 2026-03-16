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
  "vienna": [
    {
      title: "Vienna Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Vienna at golden hour.",
    },
    {
      title: "Vienna History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Vienna.",
    },
    {
      title: "Hidden Corners of Vienna",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Vienna.",
    },
    {
      title: "Vienna Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Vienna.",
    },
  ],
  "prague": [
    {
      title: "Prague Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Prague.",
    },
    {
      title: "Hidden Corners of Prague",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Prague.",
    },
    {
      title: "Prague Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Prague.",
    },
    {
      title: "Prague Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Prague with curated tasting stops.",
    },
  ],
  "istanbul": [
    {
      title: "Istanbul History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Istanbul.",
    },
    {
      title: "Istanbul Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Istanbul.",
    },
    {
      title: "Istanbul Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Istanbul at golden hour.",
    },
  ],
  "dubai": [
    {
      title: "Dubai History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Dubai.",
    },
    {
      title: "Dubai Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Dubai with curated tasting stops.",
    },
    {
      title: "Dubai Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Dubai.",
    },
    {
      title: "Hidden Corners of Dubai",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Dubai.",
    },
  ],
  "mexico-city": [
    {
      title: "Mexico City Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Mexico City.",
    },
    {
      title: "Hidden Corners of Mexico City",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Mexico City.",
    },
    {
      title: "Mexico City Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Mexico City at golden hour.",
    },
  ],
  "sydney": [
    {
      title: "Hidden Corners of Sydney",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Sydney.",
    },
    {
      title: "Sydney History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Sydney.",
    },
    {
      title: "Sydney Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Sydney.",
    },
    {
      title: "Sydney Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Sydney at golden hour.",
    },
  ],
  "seoul": [
    {
      title: "Hidden Corners of Seoul",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Seoul.",
    },
    {
      title: "Seoul Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Seoul.",
    },
    {
      title: "Seoul History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Seoul.",
    },
  ],
  "athens": [
    {
      title: "Hidden Corners of Athens",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Athens.",
    },
    {
      title: "Athens Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Athens with curated tasting stops.",
    },
    {
      title: "Athens Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Athens.",
    },
    {
      title: "Athens History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Athens.",
    },
    {
      title: "Athens Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Athens.",
    },
  ],
};

export function getAiToursByCity(citySlug: string): CuratedTour[] {
  return aiTours[citySlug] ?? [];
}
