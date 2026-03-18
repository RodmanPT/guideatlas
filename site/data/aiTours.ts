export type CuratedTour = {
  title: string;
  duration: string;
  description: string;
};

export type CityToursMap = Record<string, CuratedTour[]>;

export const aiTours: CityToursMap = {
  "lisbon": [

    {
      title: "Lisbon Food and Wine Walk",
      duration: "3 hours",
      description: "Discover Lisbon traditional flavors in Alfama and Baixa with curated tasting stops.",
    },
    {
      title: "Hidden Lisbon Viewpoints",
      duration: "2 hours",
      description: "Explore secret miradouros and backstreets with panoramic views over the city.",
    },
    {
      title: "Belem History Walk",
      duration: "2.5 hours",
      description: "Discover Portugal maritime heritage in Belem through monuments and riverside stories.",
    },
  ],
  "rome": [

    {
      title: "Roman Classics Walk",
      duration: "3 hours",
      description: "See iconic landmarks while understanding the daily life of ancient and modern Rome.",
    },
    {
      title: "Trastevere Food Journey",
      duration: "2.5 hours",
      description: "Taste local favorites in Trastevere and learn the neighborhood culinary traditions.",
    },
    {
      title: "Sunset Piazza Route",
      duration: "2 hours",
      description: "Walk through Rome most beautiful piazzas at golden hour with local context.",
    },
  ],
  "barcelona": [

    {
      title: "Gothic Quarter Stories",
      duration: "2.5 hours",
      description: "Explore medieval streets and legends in Barcelona old town with curated stops.",
    },
    {
      title: "Gaudi and Modernism Tour",
      duration: "3 hours",
      description: "Follow the modernist route through architecture, history, and city identity.",
    },
    {
      title: "Barcelona Tapas and Markets",
      duration: "2 hours",
      description: "Sample local bites in neighborhood bars and traditional market stalls.",
    },
  ],
  "tokyo": [

    {
      title: "Tokyo Night Districts",
      duration: "3 hours",
      description: "Discover Tokyo evening culture through neon streets, food alleys, and local rituals.",
    },
    {
      title: "Asakusa and Old Tokyo",
      duration: "2.5 hours",
      description: "Experience temple traditions and historic neighborhoods in old Tokyo.",
    },
    {
      title: "Shibuya to Harajuku Walk",
      duration: "2 hours",
      description: "Move between iconic areas to explore youth culture, design, and street life.",
    },
  ],
  "paris": [

    {
      title: "Paris Left Bank Walk",
      duration: "2.5 hours",
      description: "Discover literary and artistic Paris through classic Left Bank streets.",
    },
    {
      title: "Montmartre Hidden Corners",
      duration: "2 hours",
      description: "Explore village style streets, viewpoints, and stories of old Montmartre.",
    },
    {
      title: "Paris Pastry Route",
      duration: "2 hours",
      description: "Taste signature pastries while learning neighborhood food traditions.",
    },
  ],
  "london": [

    {
      title: "Historic London Highlights",
      duration: "3 hours",
      description: "Connect royal landmarks, river history, and local stories in central London.",
    },
    {
      title: "East London Street Culture",
      duration: "2.5 hours",
      description: "Explore creative districts, street art, and independent food spots.",
    },
    {
      title: "London Pub and Stories Walk",
      duration: "2 hours",
      description: "Visit classic pubs and discover how neighborhoods shaped city life.",
    },
  ],
  "bangkok": [

    {
      title: "Bangkok Street Food Trail",
      duration: "3 hours",
      description: "Taste iconic dishes in local markets and neighborhood food streets.",
    },
    {
      title: "Temple and Canal Route",
      duration: "2.5 hours",
      description: "Discover Bangkok heritage through temples, canals, and local communities.",
    },
    {
      title: "Bangkok Night Markets",
      duration: "2 hours",
      description: "Explore lively night markets with curated shopping and tasting stops.",
    },
  ],
  "new-york": [

    {
      title: "New York Neighborhood Sampler",
      duration: "3 hours",
      description: "Walk through distinct neighborhoods and discover each area local character.",
    },
    {
      title: "Brooklyn Waterfront Route",
      duration: "2.5 hours",
      description: "Experience skyline views, local history, and creative spots in Brooklyn.",
    },
    {
      title: "New York Food Classics",
      duration: "2 hours",
      description: "Taste city staples while learning the stories behind iconic local flavors.",
    },
  ],
  "berlin": [

    {
      title: "Berlin Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Berlin.",
    },
    {
      title: "Berlin Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Berlin.",
    },
    {
      title: "Berlin Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Berlin with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Berlin",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Berlin.",
    },
    {
      title: "Berlin History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Berlin.",
    },
  ],
  "amsterdam": [

    {
      title: "Amsterdam Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Amsterdam.",
    },
    {
      title: "Amsterdam Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Amsterdam.",
    },
    {
      title: "Amsterdam Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Amsterdam with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Amsterdam",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Amsterdam.",
    },
    {
      title: "Amsterdam History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Amsterdam.",
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
  "milan": [

    {
      title: "Milan Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Milan.",
    },
    {
      title: "Milan Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Milan with curated tasting stops.",
    },
    {
      title: "Milan History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Milan.",
    },
    {
      title: "Milan Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Milan at golden hour.",
    },
    {
      title: "Milan Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Milan.",
    },
  ],
  "venice": [
    {
      title: "Venice Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Venice.",
    },
    {
      title: "Venice Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Venice.",
    },
    {
      title: "Venice History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Venice.",
    },
  ],
  "naples": [
    {
      title: "Hidden Corners of Naples",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Naples.",
    },
    {
      title: "Naples Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Naples with curated tasting stops.",
    },
    {
      title: "Naples Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Naples.",
    },
    {
      title: "Naples History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Naples.",
    },
    {
      title: "Naples Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Naples.",
    },
  ],
  "palermo": [
    {
      title: "Palermo Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Palermo at golden hour.",
    },
    {
      title: "Palermo Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Palermo.",
    },
    {
      title: "Hidden Corners of Palermo",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Palermo.",
    },
    {
      title: "Palermo History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Palermo.",
    },
    {
      title: "Palermo Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Palermo with curated tasting stops.",
    },
  ],
  "valencia": [
    {
      title: "Valencia Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Valencia at golden hour.",
    },
    {
      title: "Valencia Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Valencia.",
    },
    {
      title: "Valencia Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Valencia with curated tasting stops.",
    },
    {
      title: "Valencia History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Valencia.",
    },
    {
      title: "Hidden Corners of Valencia",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Valencia.",
    },
  ],
  "seville": [
    {
      title: "Hidden Corners of Seville",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Seville.",
    },
    {
      title: "Seville Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Seville with curated tasting stops.",
    },
    {
      title: "Seville Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Seville at golden hour.",
    },
    {
      title: "Seville Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Seville.",
    },
  ],
};

export function getAiToursByCity(citySlug: string): CuratedTour[] {
  return aiTours[citySlug] ?? [];
}
