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
  "malaga": [
    {
      title: "Malaga Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Malaga.",
    },
    {
      title: "Malaga Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Malaga with curated tasting stops.",
    },
    {
      title: "Malaga Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Malaga at golden hour.",
    },
    {
      title: "Malaga Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Malaga.",
    },
    {
      title: "Hidden Corners of Malaga",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Malaga.",
    },
  ],
  "granada": [
    {
      title: "Granada History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Granada.",
    },
    {
      title: "Granada Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Granada with curated tasting stops.",
    },
    {
      title: "Granada Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Granada.",
    },
    {
      title: "Granada Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Granada at golden hour.",
    },
  ],
  "bilbao": [
    {
      title: "Bilbao Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Bilbao.",
    },
    {
      title: "Bilbao Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Bilbao with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Bilbao",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Bilbao.",
    },
    {
      title: "Bilbao History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Bilbao.",
    },
    {
      title: "Bilbao Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Bilbao.",
    },
  ],
  "marbella": [
    {
      title: "Hidden Corners of Marbella",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Marbella.",
    },
    {
      title: "Marbella Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Marbella with curated tasting stops.",
    },
    {
      title: "Marbella Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Marbella at golden hour.",
    },
    {
      title: "Marbella History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Marbella.",
    },
    {
      title: "Marbella Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Marbella.",
    },
  ],
  "nice": [
    {
      title: "Nice Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Nice at golden hour.",
    },
    {
      title: "Nice Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Nice.",
    },
    {
      title: "Nice Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Nice with curated tasting stops.",
    },
    {
      title: "Nice Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Nice.",
    },
  ],
  "lyon": [
    {
      title: "Lyon Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Lyon.",
    },
    {
      title: "Lyon History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Lyon.",
    },
    {
      title: "Lyon Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Lyon with curated tasting stops.",
    },
  ],
  "marseille": [
    {
      title: "Marseille Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Marseille with curated tasting stops.",
    },
    {
      title: "Marseille History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Marseille.",
    },
    {
      title: "Marseille Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Marseille.",
    },
    {
      title: "Hidden Corners of Marseille",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Marseille.",
    },
  ],
  "bordeaux": [
    {
      title: "Bordeaux Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Bordeaux at golden hour.",
    },
    {
      title: "Hidden Corners of Bordeaux",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Bordeaux.",
    },
    {
      title: "Bordeaux Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Bordeaux.",
    },
    {
      title: "Bordeaux History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Bordeaux.",
    },
    {
      title: "Bordeaux Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Bordeaux with curated tasting stops.",
    },
  ],
  "toulouse": [
    {
      title: "Toulouse Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Toulouse.",
    },
    {
      title: "Toulouse History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Toulouse.",
    },
    {
      title: "Toulouse Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Toulouse at golden hour.",
    },
  ],
  "munich": [
    {
      title: "Munich Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Munich.",
    },
    {
      title: "Hidden Corners of Munich",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Munich.",
    },
    {
      title: "Munich Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Munich.",
    },
    {
      title: "Munich Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Munich with curated tasting stops.",
    },
  ],
  "hamburg": [
    {
      title: "Hamburg Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Hamburg.",
    },
    {
      title: "Hamburg Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Hamburg at golden hour.",
    },
    {
      title: "Hamburg Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Hamburg.",
    },
    {
      title: "Hamburg Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Hamburg with curated tasting stops.",
    },
  ],
  "frankfurt": [
    {
      title: "Frankfurt History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Frankfurt.",
    },
    {
      title: "Frankfurt Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Frankfurt at golden hour.",
    },
    {
      title: "Frankfurt Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Frankfurt.",
    },
    {
      title: "Frankfurt Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Frankfurt with curated tasting stops.",
    },
  ],
  "cologne": [
    {
      title: "Cologne Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Cologne.",
    },
    {
      title: "Hidden Corners of Cologne",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Cologne.",
    },
    {
      title: "Cologne Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Cologne at golden hour.",
    },
    {
      title: "Cologne Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Cologne with curated tasting stops.",
    },
    {
      title: "Cologne Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Cologne.",
    },
  ],
  "brussels": [
    {
      title: "Brussels Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Brussels.",
    },
    {
      title: "Brussels Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Brussels.",
    },
    {
      title: "Brussels Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Brussels at golden hour.",
    },
    {
      title: "Brussels History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Brussels.",
    },
    {
      title: "Hidden Corners of Brussels",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Brussels.",
    },
  ],
  "bruges": [
    {
      title: "Bruges Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Bruges.",
    },
    {
      title: "Bruges Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Bruges with curated tasting stops.",
    },
    {
      title: "Bruges Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Bruges at golden hour.",
    },
    {
      title: "Bruges History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Bruges.",
    },
    {
      title: "Bruges Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Bruges.",
    },
  ],
  "antwerp": [
    {
      title: "Antwerp Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Antwerp at golden hour.",
    },
    {
      title: "Antwerp Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Antwerp.",
    },
    {
      title: "Antwerp History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Antwerp.",
    },
  ],
  "rotterdam": [
    {
      title: "Rotterdam History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Rotterdam.",
    },
    {
      title: "Rotterdam Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Rotterdam.",
    },
    {
      title: "Rotterdam Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Rotterdam.",
    },
    {
      title: "Rotterdam Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Rotterdam at golden hour.",
    },
    {
      title: "Rotterdam Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Rotterdam with curated tasting stops.",
    },
  ],
  "utrecht": [
    {
      title: "Utrecht History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Utrecht.",
    },
    {
      title: "Hidden Corners of Utrecht",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Utrecht.",
    },
    {
      title: "Utrecht Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Utrecht.",
    },
    {
      title: "Utrecht Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Utrecht at golden hour.",
    },
    {
      title: "Utrecht Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Utrecht.",
    },
  ],
  "the-hague": [
    {
      title: "The Hague Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in The Hague with curated tasting stops.",
    },
    {
      title: "The Hague History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped The Hague.",
    },
    {
      title: "Hidden Corners of The Hague",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of The Hague.",
    },
  ],
  "copenhagen": [
    {
      title: "Copenhagen Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Copenhagen at golden hour.",
    },
    {
      title: "Copenhagen Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Copenhagen.",
    },
    {
      title: "Copenhagen Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Copenhagen with curated tasting stops.",
    },
    {
      title: "Copenhagen Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Copenhagen.",
    },
  ],
  "stockholm": [
    {
      title: "Stockholm Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Stockholm with curated tasting stops.",
    },
    {
      title: "Stockholm Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Stockholm.",
    },
    {
      title: "Stockholm Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Stockholm at golden hour.",
    },
    {
      title: "Stockholm Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Stockholm.",
    },
  ],
  "oslo": [
    {
      title: "Oslo Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Oslo.",
    },
    {
      title: "Oslo History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Oslo.",
    },
    {
      title: "Oslo Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Oslo.",
    },
    {
      title: "Oslo Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Oslo with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Oslo",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Oslo.",
    },
  ],
  "helsinki": [
    {
      title: "Helsinki Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Helsinki.",
    },
    {
      title: "Helsinki Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Helsinki.",
    },
    {
      title: "Helsinki Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Helsinki at golden hour.",
    },
  ],
  "dublin": [
    {
      title: "Dublin Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Dublin with curated tasting stops.",
    },
    {
      title: "Dublin Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Dublin.",
    },
    {
      title: "Dublin Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Dublin.",
    },
    {
      title: "Dublin History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Dublin.",
    },
    {
      title: "Dublin Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Dublin at golden hour.",
    },
  ],
  "edinburgh": [
    {
      title: "Hidden Corners of Edinburgh",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Edinburgh.",
    },
    {
      title: "Edinburgh History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Edinburgh.",
    },
    {
      title: "Edinburgh Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Edinburgh.",
    },
  ],
  "manchester": [
    {
      title: "Manchester Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Manchester with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Manchester",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Manchester.",
    },
    {
      title: "Manchester History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Manchester.",
    },
    {
      title: "Manchester Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Manchester.",
    },
  ],
  "liverpool": [
    {
      title: "Hidden Corners of Liverpool",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Liverpool.",
    },
    {
      title: "Liverpool History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Liverpool.",
    },
    {
      title: "Liverpool Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Liverpool at golden hour.",
    },
    {
      title: "Liverpool Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Liverpool.",
    },
  ],
  "bath": [
    {
      title: "Bath Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Bath at golden hour.",
    },
    {
      title: "Bath Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Bath.",
    },
    {
      title: "Bath Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Bath with curated tasting stops.",
    },
    {
      title: "Bath Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Bath.",
    },
  ],
  "budapest": [
    {
      title: "Budapest Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Budapest.",
    },
    {
      title: "Budapest Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Budapest at golden hour.",
    },
    {
      title: "Budapest History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Budapest.",
    },
  ],
};

export function getAiToursByCity(citySlug: string): CuratedTour[] {
  return aiTours[citySlug] ?? [];
}
