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
  "krakow": [
    {
      title: "Krakow Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Krakow.",
    },
    {
      title: "Krakow Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Krakow.",
    },
    {
      title: "Krakow Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Krakow at golden hour.",
    },
  ],
  "warsaw": [
    {
      title: "Hidden Corners of Warsaw",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Warsaw.",
    },
    {
      title: "Warsaw Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Warsaw.",
    },
    {
      title: "Warsaw Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Warsaw.",
    },
  ],
  "zagreb": [
    {
      title: "Zagreb Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Zagreb with curated tasting stops.",
    },
    {
      title: "Zagreb Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Zagreb.",
    },
    {
      title: "Hidden Corners of Zagreb",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Zagreb.",
    },
    {
      title: "Zagreb Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Zagreb at golden hour.",
    },
  ],
  "split": [
    {
      title: "Split Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Split with curated tasting stops.",
    },
    {
      title: "Split Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Split.",
    },
    {
      title: "Split History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Split.",
    },
    {
      title: "Split Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Split.",
    },
    {
      title: "Hidden Corners of Split",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Split.",
    },
  ],
  "dubrovnik": [
    {
      title: "Dubrovnik Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Dubrovnik with curated tasting stops.",
    },
    {
      title: "Dubrovnik Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Dubrovnik.",
    },
    {
      title: "Dubrovnik Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Dubrovnik at golden hour.",
    },
    {
      title: "Dubrovnik Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Dubrovnik.",
    },
  ],
  "ljubljana": [
    {
      title: "Hidden Corners of Ljubljana",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Ljubljana.",
    },
    {
      title: "Ljubljana Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Ljubljana with curated tasting stops.",
    },
    {
      title: "Ljubljana Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Ljubljana at golden hour.",
    },
  ],
  "bucharest": [
    {
      title: "Bucharest Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Bucharest at golden hour.",
    },
    {
      title: "Bucharest History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Bucharest.",
    },
    {
      title: "Hidden Corners of Bucharest",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Bucharest.",
    },
    {
      title: "Bucharest Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Bucharest.",
    },
    {
      title: "Bucharest Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Bucharest with curated tasting stops.",
    },
  ],
  "sofia": [
    {
      title: "Sofia Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Sofia.",
    },
    {
      title: "Sofia Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Sofia at golden hour.",
    },
    {
      title: "Sofia History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Sofia.",
    },
    {
      title: "Hidden Corners of Sofia",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Sofia.",
    },
  ],
  "tirana": [
    {
      title: "Tirana History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Tirana.",
    },
    {
      title: "Tirana Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Tirana with curated tasting stops.",
    },
    {
      title: "Tirana Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Tirana.",
    },
    {
      title: "Hidden Corners of Tirana",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Tirana.",
    },
    {
      title: "Tirana Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Tirana at golden hour.",
    },
  ],
  "belgrade": [
    {
      title: "Belgrade Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Belgrade with curated tasting stops.",
    },
    {
      title: "Belgrade Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Belgrade.",
    },
    {
      title: "Belgrade Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Belgrade.",
    },
  ],
  "reykjavik": [
    {
      title: "Reykjavik Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Reykjavik at golden hour.",
    },
    {
      title: "Reykjavik History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Reykjavik.",
    },
    {
      title: "Reykjavik Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Reykjavik.",
    },
    {
      title: "Reykjavik Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Reykjavik with curated tasting stops.",
    },
  ],
  "zurich": [
    {
      title: "Hidden Corners of Zurich",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Zurich.",
    },
    {
      title: "Zurich Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Zurich.",
    },
    {
      title: "Zurich Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Zurich.",
    },
  ],
  "geneva": [
    {
      title: "Geneva Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Geneva at golden hour.",
    },
    {
      title: "Geneva Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Geneva.",
    },
    {
      title: "Geneva History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Geneva.",
    },
    {
      title: "Geneva Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Geneva with curated tasting stops.",
    },
  ],
  "lucerne": [
    {
      title: "Lucerne History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Lucerne.",
    },
    {
      title: "Lucerne Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Lucerne with curated tasting stops.",
    },
    {
      title: "Lucerne Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Lucerne.",
    },
    {
      title: "Lucerne Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Lucerne.",
    },
  ],
  "vienna-woods": [
    {
      title: "Vienna Woods Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Vienna Woods.",
    },
    {
      title: "Hidden Corners of Vienna Woods",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Vienna Woods.",
    },
    {
      title: "Vienna Woods Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Vienna Woods with curated tasting stops.",
    },
  ],
  "santorini": [
    {
      title: "Santorini Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Santorini with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Santorini",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Santorini.",
    },
    {
      title: "Santorini History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Santorini.",
    },
    {
      title: "Santorini Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Santorini at golden hour.",
    },
    {
      title: "Santorini Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Santorini.",
    },
  ],
  "mykonos": [
    {
      title: "Mykonos Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Mykonos at golden hour.",
    },
    {
      title: "Hidden Corners of Mykonos",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Mykonos.",
    },
    {
      title: "Mykonos Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Mykonos.",
    },
    {
      title: "Mykonos History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Mykonos.",
    },
  ],
  "crete": [
    {
      title: "Crete Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Crete with curated tasting stops.",
    },
    {
      title: "Crete Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Crete.",
    },
    {
      title: "Crete History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Crete.",
    },
    {
      title: "Crete Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Crete at golden hour.",
    },
    {
      title: "Hidden Corners of Crete",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Crete.",
    },
  ],
  "jerusalem": [
    {
      title: "Jerusalem Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Jerusalem.",
    },
    {
      title: "Hidden Corners of Jerusalem",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Jerusalem.",
    },
    {
      title: "Jerusalem Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Jerusalem at golden hour.",
    },
  ],
  "tel-aviv": [
    {
      title: "Tel Aviv Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Tel Aviv.",
    },
    {
      title: "Tel Aviv Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Tel Aviv with curated tasting stops.",
    },
    {
      title: "Tel Aviv Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Tel Aviv.",
    },
    {
      title: "Hidden Corners of Tel Aviv",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Tel Aviv.",
    },
  ],
  "cairo": [
    {
      title: "Cairo Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Cairo at golden hour.",
    },
    {
      title: "Cairo History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Cairo.",
    },
    {
      title: "Cairo Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Cairo.",
    },
  ],
  "marrakesh": [
    {
      title: "Marrakesh Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Marrakesh with curated tasting stops.",
    },
    {
      title: "Marrakesh History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Marrakesh.",
    },
    {
      title: "Marrakesh Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Marrakesh.",
    },
    {
      title: "Hidden Corners of Marrakesh",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Marrakesh.",
    },
  ],
  "casablanca": [
    {
      title: "Casablanca History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Casablanca.",
    },
    {
      title: "Casablanca Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Casablanca.",
    },
    {
      title: "Casablanca Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Casablanca with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Casablanca",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Casablanca.",
    },
  ],
  "fez": [
    {
      title: "Fez Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Fez.",
    },
    {
      title: "Fez Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Fez at golden hour.",
    },
    {
      title: "Fez History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Fez.",
    },
    {
      title: "Fez Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Fez with curated tasting stops.",
    },
    {
      title: "Fez Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Fez.",
    },
  ],
  "cape-town": [
    {
      title: "Cape Town Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Cape Town.",
    },
    {
      title: "Hidden Corners of Cape Town",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Cape Town.",
    },
    {
      title: "Cape Town History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Cape Town.",
    },
    {
      title: "Cape Town Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Cape Town with curated tasting stops.",
    },
    {
      title: "Cape Town Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Cape Town at golden hour.",
    },
  ],
  "johannesburg": [
    {
      title: "Johannesburg Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Johannesburg.",
    },
    {
      title: "Johannesburg Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Johannesburg at golden hour.",
    },
    {
      title: "Johannesburg History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Johannesburg.",
    },
    {
      title: "Hidden Corners of Johannesburg",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Johannesburg.",
    },
  ],
  "nairobi": [
    {
      title: "Nairobi Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Nairobi at golden hour.",
    },
    {
      title: "Nairobi Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Nairobi.",
    },
    {
      title: "Nairobi Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Nairobi.",
    },
    {
      title: "Hidden Corners of Nairobi",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Nairobi.",
    },
    {
      title: "Nairobi History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Nairobi.",
    },
  ],
  "zanzibar-city": [
    {
      title: "Zanzibar City Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Zanzibar City.",
    },
    {
      title: "Hidden Corners of Zanzibar City",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Zanzibar City.",
    },
    {
      title: "Zanzibar City History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Zanzibar City.",
    },
  ],
  "doha": [
    {
      title: "Hidden Corners of Doha",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Doha.",
    },
    {
      title: "Doha History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Doha.",
    },
    {
      title: "Doha Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Doha at golden hour.",
    },
    {
      title: "Doha Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Doha.",
    },
  ],
  "abu-dhabi": [
    {
      title: "Hidden Corners of Abu Dhabi",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Abu Dhabi.",
    },
    {
      title: "Abu Dhabi History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Abu Dhabi.",
    },
    {
      title: "Abu Dhabi Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Abu Dhabi.",
    },
    {
      title: "Abu Dhabi Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Abu Dhabi.",
    },
  ],
  "muscat": [
    {
      title: "Muscat Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Muscat with curated tasting stops.",
    },
    {
      title: "Muscat History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Muscat.",
    },
    {
      title: "Muscat Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Muscat.",
    },
    {
      title: "Hidden Corners of Muscat",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Muscat.",
    },
    {
      title: "Muscat Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Muscat.",
    },
  ],
  "riyadh": [
    {
      title: "Riyadh Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Riyadh at golden hour.",
    },
    {
      title: "Riyadh History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Riyadh.",
    },
    {
      title: "Hidden Corners of Riyadh",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Riyadh.",
    },
    {
      title: "Riyadh Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Riyadh.",
    },
  ],
  "jeddah": [
    {
      title: "Jeddah Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Jeddah with curated tasting stops.",
    },
    {
      title: "Jeddah Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Jeddah.",
    },
    {
      title: "Jeddah History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Jeddah.",
    },
  ],
  "mumbai": [
    {
      title: "Mumbai Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Mumbai with curated tasting stops.",
    },
    {
      title: "Mumbai Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Mumbai.",
    },
    {
      title: "Hidden Corners of Mumbai",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Mumbai.",
    },
    {
      title: "Mumbai Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Mumbai at golden hour.",
    },
  ],
  "new-delhi": [
    {
      title: "New Delhi Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around New Delhi at golden hour.",
    },
    {
      title: "New Delhi Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in New Delhi with curated tasting stops.",
    },
    {
      title: "New Delhi Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in New Delhi.",
    },
    {
      title: "New Delhi Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in New Delhi.",
    },
    {
      title: "Hidden Corners of New Delhi",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of New Delhi.",
    },
  ],
  "jaipur": [
    {
      title: "Jaipur Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Jaipur.",
    },
    {
      title: "Jaipur History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Jaipur.",
    },
    {
      title: "Jaipur Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Jaipur at golden hour.",
    },
  ],
  "agra": [
    {
      title: "Agra Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Agra at golden hour.",
    },
    {
      title: "Agra Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Agra.",
    },
    {
      title: "Agra Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Agra.",
    },
  ],
  "goa": [
    {
      title: "Goa Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Goa.",
    },
    {
      title: "Goa Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Goa.",
    },
    {
      title: "Hidden Corners of Goa",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Goa.",
    },
    {
      title: "Goa Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Goa at golden hour.",
    },
  ],
  "kathmandu": [
    {
      title: "Kathmandu Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Kathmandu with curated tasting stops.",
    },
    {
      title: "Kathmandu Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Kathmandu at golden hour.",
    },
    {
      title: "Kathmandu Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Kathmandu.",
    },
    {
      title: "Kathmandu History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Kathmandu.",
    },
  ],
  "colombo": [
    {
      title: "Colombo Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Colombo.",
    },
    {
      title: "Colombo History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Colombo.",
    },
    {
      title: "Hidden Corners of Colombo",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Colombo.",
    },
    {
      title: "Colombo Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Colombo at golden hour.",
    },
  ],
  "male": [
    {
      title: "Male Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Male at golden hour.",
    },
    {
      title: "Male Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Male.",
    },
    {
      title: "Male Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Male with curated tasting stops.",
    },
    {
      title: "Male Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Male.",
    },
  ],
  "singapore": [
    {
      title: "Singapore Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Singapore.",
    },
    {
      title: "Hidden Corners of Singapore",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Singapore.",
    },
    {
      title: "Singapore Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Singapore at golden hour.",
    },
  ],
  "kuala-lumpur": [
    {
      title: "Kuala Lumpur Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Kuala Lumpur with curated tasting stops.",
    },
    {
      title: "Kuala Lumpur History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Kuala Lumpur.",
    },
    {
      title: "Kuala Lumpur Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Kuala Lumpur at golden hour.",
    },
    {
      title: "Hidden Corners of Kuala Lumpur",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Kuala Lumpur.",
    },
    {
      title: "Kuala Lumpur Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Kuala Lumpur.",
    },
  ],
  "penang": [
    {
      title: "Hidden Corners of Penang",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Penang.",
    },
    {
      title: "Penang Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Penang at golden hour.",
    },
    {
      title: "Penang Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Penang.",
    },
  ],
  "ho-chi-minh-city": [
    {
      title: "Ho Chi Minh City Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Ho Chi Minh City with curated tasting stops.",
    },
    {
      title: "Ho Chi Minh City Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Ho Chi Minh City.",
    },
    {
      title: "Hidden Corners of Ho Chi Minh City",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Ho Chi Minh City.",
    },
    {
      title: "Ho Chi Minh City Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Ho Chi Minh City at golden hour.",
    },
    {
      title: "Ho Chi Minh City History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Ho Chi Minh City.",
    },
  ],
  "hanoi": [
    {
      title: "Hanoi Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Hanoi at golden hour.",
    },
    {
      title: "Hanoi Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Hanoi.",
    },
    {
      title: "Hanoi Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Hanoi with curated tasting stops.",
    },
    {
      title: "Hanoi Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Hanoi.",
    },
  ],
  "da-nang": [
    {
      title: "Da Nang Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Da Nang.",
    },
    {
      title: "Da Nang History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Da Nang.",
    },
    {
      title: "Da Nang Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Da Nang at golden hour.",
    },
    {
      title: "Hidden Corners of Da Nang",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Da Nang.",
    },
    {
      title: "Da Nang Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Da Nang.",
    },
  ],
  "siem-reap": [
    {
      title: "Siem Reap History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Siem Reap.",
    },
    {
      title: "Siem Reap Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Siem Reap.",
    },
    {
      title: "Siem Reap Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Siem Reap at golden hour.",
    },
  ],
  "phnom-penh": [
    {
      title: "Hidden Corners of Phnom Penh",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Phnom Penh.",
    },
    {
      title: "Phnom Penh Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Phnom Penh.",
    },
    {
      title: "Phnom Penh History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Phnom Penh.",
    },
    {
      title: "Phnom Penh Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Phnom Penh with curated tasting stops.",
    },
  ],
  "luang-prabang": [
    {
      title: "Luang Prabang Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Luang Prabang.",
    },
    {
      title: "Luang Prabang Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Luang Prabang at golden hour.",
    },
    {
      title: "Hidden Corners of Luang Prabang",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Luang Prabang.",
    },
  ],
  "jakarta": [
    {
      title: "Hidden Corners of Jakarta",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Jakarta.",
    },
    {
      title: "Jakarta Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Jakarta with curated tasting stops.",
    },
    {
      title: "Jakarta Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Jakarta at golden hour.",
    },
    {
      title: "Jakarta Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Jakarta.",
    },
    {
      title: "Jakarta Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Jakarta.",
    },
  ],
  "bali": [
    {
      title: "Bali Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Bali.",
    },
    {
      title: "Bali Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Bali with curated tasting stops.",
    },
    {
      title: "Bali Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Bali.",
    },
    {
      title: "Hidden Corners of Bali",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Bali.",
    },
    {
      title: "Bali History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Bali.",
    },
  ],
  "yogyakarta": [
    {
      title: "Yogyakarta History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Yogyakarta.",
    },
    {
      title: "Yogyakarta Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Yogyakarta.",
    },
    {
      title: "Hidden Corners of Yogyakarta",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Yogyakarta.",
    },
    {
      title: "Yogyakarta Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Yogyakarta.",
    },
    {
      title: "Yogyakarta Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Yogyakarta at golden hour.",
    },
  ],
  "manila": [
    {
      title: "Manila Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Manila.",
    },
    {
      title: "Manila Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Manila at golden hour.",
    },
    {
      title: "Manila History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Manila.",
    },
    {
      title: "Manila Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Manila.",
    },
  ],
  "cebu-city": [
    {
      title: "Hidden Corners of Cebu City",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Cebu City.",
    },
    {
      title: "Cebu City Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Cebu City at golden hour.",
    },
    {
      title: "Cebu City Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Cebu City.",
    },
    {
      title: "Cebu City Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Cebu City with curated tasting stops.",
    },
  ],
  "hong-kong": [
    {
      title: "Hidden Corners of Hong Kong",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Hong Kong.",
    },
    {
      title: "Hong Kong Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Hong Kong with curated tasting stops.",
    },
    {
      title: "Hong Kong Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Hong Kong.",
    },
    {
      title: "Hong Kong Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Hong Kong at golden hour.",
    },
    {
      title: "Hong Kong History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Hong Kong.",
    },
  ],
  "macau": [
    {
      title: "Hidden Corners of Macau",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Macau.",
    },
    {
      title: "Macau Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Macau.",
    },
    {
      title: "Macau Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Macau.",
    },
    {
      title: "Macau History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Macau.",
    },
    {
      title: "Macau Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Macau with curated tasting stops.",
    },
  ],
  "beijing": [
    {
      title: "Hidden Corners of Beijing",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Beijing.",
    },
    {
      title: "Beijing Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Beijing.",
    },
    {
      title: "Beijing History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Beijing.",
    },
  ],
  "shanghai": [
    {
      title: "Shanghai Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Shanghai at golden hour.",
    },
    {
      title: "Shanghai Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Shanghai.",
    },
    {
      title: "Shanghai Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Shanghai with curated tasting stops.",
    },
    {
      title: "Shanghai History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Shanghai.",
    },
    {
      title: "Hidden Corners of Shanghai",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Shanghai.",
    },
  ],
  "xian": [
    {
      title: "Xian Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Xian.",
    },
    {
      title: "Xian History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Xian.",
    },
    {
      title: "Hidden Corners of Xian",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Xian.",
    },
    {
      title: "Xian Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Xian with curated tasting stops.",
    },
    {
      title: "Xian Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Xian at golden hour.",
    },
  ],
  "guangzhou": [
    {
      title: "Hidden Corners of Guangzhou",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Guangzhou.",
    },
    {
      title: "Guangzhou History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Guangzhou.",
    },
    {
      title: "Guangzhou Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Guangzhou.",
    },
    {
      title: "Guangzhou Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Guangzhou at golden hour.",
    },
    {
      title: "Guangzhou Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Guangzhou with curated tasting stops.",
    },
  ],
  "kyoto": [
    {
      title: "Kyoto Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Kyoto.",
    },
    {
      title: "Kyoto Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Kyoto with curated tasting stops.",
    },
    {
      title: "Kyoto Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Kyoto at golden hour.",
    },
    {
      title: "Hidden Corners of Kyoto",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Kyoto.",
    },
  ],
  "osaka": [
    {
      title: "Osaka Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Osaka at golden hour.",
    },
    {
      title: "Osaka Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Osaka.",
    },
    {
      title: "Osaka Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Osaka with curated tasting stops.",
    },
    {
      title: "Osaka Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Osaka.",
    },
  ],
  "nara": [
    {
      title: "Nara Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Nara at golden hour.",
    },
    {
      title: "Hidden Corners of Nara",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Nara.",
    },
    {
      title: "Nara Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Nara.",
    },
    {
      title: "Nara Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Nara.",
    },
  ],
  "sapporo": [
    {
      title: "Hidden Corners of Sapporo",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Sapporo.",
    },
    {
      title: "Sapporo Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Sapporo.",
    },
    {
      title: "Sapporo Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Sapporo at golden hour.",
    },
  ],
  "fukuoka": [
    {
      title: "Fukuoka Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Fukuoka.",
    },
    {
      title: "Hidden Corners of Fukuoka",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Fukuoka.",
    },
    {
      title: "Fukuoka Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Fukuoka at golden hour.",
    },
    {
      title: "Fukuoka History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Fukuoka.",
    },
  ],
  "taipei": [
    {
      title: "Taipei Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Taipei.",
    },
    {
      title: "Taipei History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Taipei.",
    },
    {
      title: "Taipei Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Taipei.",
    },
  ],
  "kaohsiung": [
    {
      title: "Kaohsiung History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Kaohsiung.",
    },
    {
      title: "Kaohsiung Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Kaohsiung at golden hour.",
    },
    {
      title: "Hidden Corners of Kaohsiung",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Kaohsiung.",
    },
    {
      title: "Kaohsiung Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Kaohsiung with curated tasting stops.",
    },
  ],
  "auckland": [
    {
      title: "Auckland Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Auckland at golden hour.",
    },
    {
      title: "Auckland Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Auckland.",
    },
    {
      title: "Auckland Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Auckland with curated tasting stops.",
    },
    {
      title: "Auckland History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Auckland.",
    },
    {
      title: "Hidden Corners of Auckland",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Auckland.",
    },
  ],
  "queenstown": [
    {
      title: "Queenstown Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Queenstown.",
    },
    {
      title: "Queenstown Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Queenstown at golden hour.",
    },
    {
      title: "Queenstown History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Queenstown.",
    },
  ],
  "melbourne": [
    {
      title: "Melbourne History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Melbourne.",
    },
    {
      title: "Melbourne Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Melbourne at golden hour.",
    },
    {
      title: "Hidden Corners of Melbourne",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Melbourne.",
    },
    {
      title: "Melbourne Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Melbourne with curated tasting stops.",
    },
  ],
  "brisbane": [
    {
      title: "Brisbane Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Brisbane at golden hour.",
    },
    {
      title: "Hidden Corners of Brisbane",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Brisbane.",
    },
    {
      title: "Brisbane Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Brisbane with curated tasting stops.",
    },
    {
      title: "Brisbane Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Brisbane.",
    },
    {
      title: "Brisbane History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Brisbane.",
    },
  ],
  "perth": [
    {
      title: "Perth Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Perth at golden hour.",
    },
    {
      title: "Perth Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Perth.",
    },
    {
      title: "Hidden Corners of Perth",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Perth.",
    },
  ],
  "honolulu": [
    {
      title: "Hidden Corners of Honolulu",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Honolulu.",
    },
    {
      title: "Honolulu History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Honolulu.",
    },
    {
      title: "Honolulu Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Honolulu with curated tasting stops.",
    },
  ],
  "los-angeles": [
    {
      title: "Los Angeles Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Los Angeles with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Los Angeles",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Los Angeles.",
    },
    {
      title: "Los Angeles Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Los Angeles.",
    },
    {
      title: "Los Angeles Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Los Angeles.",
    },
    {
      title: "Los Angeles Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Los Angeles at golden hour.",
    },
  ],
  "san-francisco": [
    {
      title: "San Francisco Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in San Francisco.",
    },
    {
      title: "Hidden Corners of San Francisco",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of San Francisco.",
    },
    {
      title: "San Francisco Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in San Francisco.",
    },
    {
      title: "San Francisco Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in San Francisco with curated tasting stops.",
    },
  ],
  "las-vegas": [
    {
      title: "Las Vegas History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Las Vegas.",
    },
    {
      title: "Las Vegas Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Las Vegas.",
    },
    {
      title: "Las Vegas Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Las Vegas at golden hour.",
    },
  ],
  "miami": [
    {
      title: "Miami Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Miami.",
    },
    {
      title: "Miami Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Miami.",
    },
    {
      title: "Miami History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Miami.",
    },
    {
      title: "Hidden Corners of Miami",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Miami.",
    },
    {
      title: "Miami Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Miami at golden hour.",
    },
  ],
  "orlando": [
    {
      title: "Orlando Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Orlando.",
    },
    {
      title: "Orlando Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Orlando at golden hour.",
    },
    {
      title: "Hidden Corners of Orlando",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Orlando.",
    },
    {
      title: "Orlando History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Orlando.",
    },
    {
      title: "Orlando Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Orlando with curated tasting stops.",
    },
  ],
  "new-orleans": [
    {
      title: "New Orleans Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in New Orleans.",
    },
    {
      title: "Hidden Corners of New Orleans",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of New Orleans.",
    },
    {
      title: "New Orleans Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around New Orleans at golden hour.",
    },
  ],
  "chicago": [
    {
      title: "Chicago History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Chicago.",
    },
    {
      title: "Chicago Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Chicago with curated tasting stops.",
    },
    {
      title: "Chicago Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Chicago.",
    },
    {
      title: "Chicago Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Chicago at golden hour.",
    },
  ],
  "washington-dc": [
    {
      title: "Washington DC History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Washington DC.",
    },
    {
      title: "Washington DC Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Washington DC.",
    },
    {
      title: "Hidden Corners of Washington DC",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Washington DC.",
    },
    {
      title: "Washington DC Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Washington DC.",
    },
    {
      title: "Washington DC Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Washington DC with curated tasting stops.",
    },
  ],
  "boston": [
    {
      title: "Hidden Corners of Boston",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Boston.",
    },
    {
      title: "Boston Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Boston.",
    },
    {
      title: "Boston Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Boston.",
    },
  ],
  "seattle": [
    {
      title: "Seattle Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Seattle.",
    },
    {
      title: "Seattle Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Seattle with curated tasting stops.",
    },
    {
      title: "Seattle History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Seattle.",
    },
  ],
  "vancouver": [
    {
      title: "Vancouver Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Vancouver at golden hour.",
    },
    {
      title: "Vancouver Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Vancouver.",
    },
    {
      title: "Vancouver Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Vancouver.",
    },
    {
      title: "Vancouver Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Vancouver with curated tasting stops.",
    },
  ],
  "toronto": [
    {
      title: "Toronto History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Toronto.",
    },
    {
      title: "Hidden Corners of Toronto",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Toronto.",
    },
    {
      title: "Toronto Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Toronto.",
    },
    {
      title: "Toronto Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Toronto at golden hour.",
    },
  ],
  "montreal": [
    {
      title: "Montreal History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Montreal.",
    },
    {
      title: "Montreal Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Montreal.",
    },
    {
      title: "Montreal Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Montreal at golden hour.",
    },
  ],
  "quebec-city": [
    {
      title: "Quebec City Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Quebec City.",
    },
    {
      title: "Hidden Corners of Quebec City",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Quebec City.",
    },
    {
      title: "Quebec City Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Quebec City at golden hour.",
    },
    {
      title: "Quebec City Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Quebec City.",
    },
  ],
  "cancun": [
    {
      title: "Cancun History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Cancun.",
    },
    {
      title: "Cancun Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Cancun.",
    },
    {
      title: "Cancun Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Cancun at golden hour.",
    },
    {
      title: "Cancun Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Cancun with curated tasting stops.",
    },
  ],
  "playa-del-carmen": [
    {
      title: "Playa del Carmen Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Playa del Carmen at golden hour.",
    },
    {
      title: "Playa del Carmen History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Playa del Carmen.",
    },
    {
      title: "Playa del Carmen Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Playa del Carmen.",
    },
  ],
  "guadalajara": [
    {
      title: "Guadalajara Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Guadalajara.",
    },
    {
      title: "Guadalajara Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Guadalajara with curated tasting stops.",
    },
    {
      title: "Guadalajara Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Guadalajara.",
    },
    {
      title: "Hidden Corners of Guadalajara",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Guadalajara.",
    },
  ],
  "bogota": [
    {
      title: "Bogota Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Bogota.",
    },
    {
      title: "Bogota History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Bogota.",
    },
    {
      title: "Bogota Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Bogota.",
    },
  ],
  "medellin": [
    {
      title: "Medellin History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Medellin.",
    },
    {
      title: "Medellin Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Medellin.",
    },
    {
      title: "Medellin Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Medellin.",
    },
  ],
  "cartagena": [
    {
      title: "Cartagena History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Cartagena.",
    },
    {
      title: "Cartagena Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Cartagena.",
    },
    {
      title: "Cartagena Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Cartagena at golden hour.",
    },
    {
      title: "Cartagena Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Cartagena.",
    },
  ],
  "lima": [
    {
      title: "Lima Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Lima with curated tasting stops.",
    },
    {
      title: "Lima History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Lima.",
    },
    {
      title: "Lima Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Lima at golden hour.",
    },
    {
      title: "Lima Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Lima.",
    },
    {
      title: "Hidden Corners of Lima",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Lima.",
    },
  ],
  "cusco": [
    {
      title: "Hidden Corners of Cusco",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Cusco.",
    },
    {
      title: "Cusco History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Cusco.",
    },
    {
      title: "Cusco Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Cusco.",
    },
    {
      title: "Cusco Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Cusco.",
    },
  ],
  "santiago": [
    {
      title: "Hidden Corners of Santiago",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Santiago.",
    },
    {
      title: "Santiago Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Santiago with curated tasting stops.",
    },
    {
      title: "Santiago Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Santiago.",
    },
    {
      title: "Santiago Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Santiago at golden hour.",
    },
  ],
  "buenos-aires": [
    {
      title: "Buenos Aires Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Buenos Aires.",
    },
    {
      title: "Buenos Aires History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Buenos Aires.",
    },
    {
      title: "Hidden Corners of Buenos Aires",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Buenos Aires.",
    },
  ],
  "rio-de-janeiro": [
    {
      title: "Rio de Janeiro Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Rio de Janeiro with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Rio de Janeiro",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Rio de Janeiro.",
    },
    {
      title: "Rio de Janeiro Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Rio de Janeiro.",
    },
    {
      title: "Rio de Janeiro Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Rio de Janeiro.",
    },
  ],
  "sao-paulo": [
    {
      title: "Sao Paulo Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Sao Paulo.",
    },
    {
      title: "Sao Paulo Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Sao Paulo.",
    },
    {
      title: "Hidden Corners of Sao Paulo",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Sao Paulo.",
    },
  ],
  "salvador": [
    {
      title: "Salvador Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Salvador at golden hour.",
    },
    {
      title: "Salvador Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Salvador.",
    },
    {
      title: "Salvador History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Salvador.",
    },
  ],
  "panama-city": [
    {
      title: "Panama City Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Panama City at golden hour.",
    },
    {
      title: "Panama City Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Panama City with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Panama City",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Panama City.",
    },
  ],
  "san-jose-cr": [
    {
      title: "San Jose History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped San Jose.",
    },
    {
      title: "San Jose Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around San Jose at golden hour.",
    },
    {
      title: "San Jose Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in San Jose with curated tasting stops.",
    },
    {
      title: "San Jose Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in San Jose.",
    },
  ],
  "fake-city-123": [
    {
      title: "Fake City 123 Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Fake City 123 with curated tasting stops.",
    },
    {
      title: "Fake City 123 History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Fake City 123.",
    },
    {
      title: "Hidden Corners of Fake City 123",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Fake City 123.",
    },
    {
      title: "Fake City 123 Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Fake City 123 at golden hour.",
    },
    {
      title: "Fake City 123 Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Fake City 123.",
    },
  ],
  "glasgow": [
    {
      title: "Hidden Corners of Glasgow",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Glasgow.",
    },
    {
      title: "Glasgow Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Glasgow with curated tasting stops.",
    },
    {
      title: "Glasgow Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Glasgow at golden hour.",
    },
    {
      title: "Glasgow Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Glasgow.",
    },
  ],
  "birmingham": [
    {
      title: "Birmingham History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Birmingham.",
    },
    {
      title: "Birmingham Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Birmingham at golden hour.",
    },
    {
      title: "Birmingham Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Birmingham.",
    },
  ],
  "cardiff": [
    {
      title: "Cardiff Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Cardiff.",
    },
    {
      title: "Cardiff Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Cardiff at golden hour.",
    },
    {
      title: "Cardiff History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Cardiff.",
    },
    {
      title: "Hidden Corners of Cardiff",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Cardiff.",
    },
  ],
  "belfast": [
    {
      title: "Belfast Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Belfast.",
    },
    {
      title: "Belfast History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Belfast.",
    },
    {
      title: "Belfast Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Belfast at golden hour.",
    },
  ],
  "austin": [
    {
      title: "Hidden Corners of Austin",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Austin.",
    },
    {
      title: "Austin Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Austin.",
    },
    {
      title: "Austin Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Austin with curated tasting stops.",
    },
  ],
  "denver": [
    {
      title: "Denver Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Denver.",
    },
    {
      title: "Hidden Corners of Denver",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Denver.",
    },
    {
      title: "Denver Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Denver.",
    },
    {
      title: "Denver Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Denver with curated tasting stops.",
    },
  ],
  "houston": [
    {
      title: "Houston Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Houston at golden hour.",
    },
    {
      title: "Hidden Corners of Houston",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Houston.",
    },
    {
      title: "Houston Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Houston.",
    },
    {
      title: "Houston History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Houston.",
    },
  ],
  "dallas": [
    {
      title: "Dallas Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Dallas at golden hour.",
    },
    {
      title: "Dallas Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Dallas.",
    },
    {
      title: "Hidden Corners of Dallas",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Dallas.",
    },
    {
      title: "Dallas Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Dallas with curated tasting stops.",
    },
  ],
  "phoenix": [
    {
      title: "Hidden Corners of Phoenix",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Phoenix.",
    },
    {
      title: "Phoenix History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Phoenix.",
    },
    {
      title: "Phoenix Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Phoenix.",
    },
    {
      title: "Phoenix Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Phoenix.",
    },
    {
      title: "Phoenix Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Phoenix at golden hour.",
    },
  ],
  "philadelphia": [
    {
      title: "Philadelphia Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Philadelphia.",
    },
    {
      title: "Philadelphia History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Philadelphia.",
    },
    {
      title: "Philadelphia Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Philadelphia with curated tasting stops.",
    },
    {
      title: "Philadelphia Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Philadelphia at golden hour.",
    },
    {
      title: "Philadelphia Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Philadelphia.",
    },
  ],
  "san-diego": [
    {
      title: "San Diego History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped San Diego.",
    },
    {
      title: "San Diego Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in San Diego.",
    },
    {
      title: "San Diego Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in San Diego with curated tasting stops.",
    },
    {
      title: "Hidden Corners of San Diego",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of San Diego.",
    },
  ],
  "san-antonio": [
    {
      title: "San Antonio Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in San Antonio.",
    },
    {
      title: "San Antonio Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in San Antonio.",
    },
    {
      title: "San Antonio Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around San Antonio at golden hour.",
    },
    {
      title: "San Antonio Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in San Antonio with curated tasting stops.",
    },
  ],
  "omaha": [
    {
      title: "Omaha Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Omaha with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Omaha",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Omaha.",
    },
    {
      title: "Omaha Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Omaha at golden hour.",
    },
    {
      title: "Omaha Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Omaha.",
    },
  ],
  "atlanta": [
    {
      title: "Atlanta Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Atlanta.",
    },
    {
      title: "Atlanta History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Atlanta.",
    },
    {
      title: "Hidden Corners of Atlanta",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Atlanta.",
    },
  ],
  "kyiv": [
    {
      title: "Kyiv Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Kyiv with curated tasting stops.",
    },
    {
      title: "Kyiv Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Kyiv.",
    },
    {
      title: "Kyiv History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Kyiv.",
    },
  ],
  "test-mock-city": [
    {
      title: "Test Mock City Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Test Mock City at golden hour.",
    },
    {
      title: "Test Mock City History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Test Mock City.",
    },
    {
      title: "Test Mock City Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Test Mock City with curated tasting stops.",
    },
    {
      title: "Test Mock City Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Test Mock City.",
    },
  ],
  "test-city-2": [
    {
      title: "Test City 2 Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Test City 2 with curated tasting stops.",
    },
    {
      title: "Test City 2 Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Test City 2 at golden hour.",
    },
    {
      title: "Test City 2 Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Test City 2.",
    },
    {
      title: "Hidden Corners of Test City 2",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Test City 2.",
    },
    {
      title: "Test City 2 Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Test City 2.",
    },
  ],
  "portland": [
    {
      title: "Portland Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Portland.",
    },
    {
      title: "Portland Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Portland.",
    },
    {
      title: "Portland Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Portland at golden hour.",
    },
    {
      title: "Portland Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Portland with curated tasting stops.",
    },
  ],
  "detroit": [
    {
      title: "Hidden Corners of Detroit",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Detroit.",
    },
    {
      title: "Detroit History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Detroit.",
    },
    {
      title: "Detroit Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Detroit.",
    },
    {
      title: "Detroit Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Detroit.",
    },
    {
      title: "Detroit Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Detroit at golden hour.",
    },
  ],
  "minneapolis": [
    {
      title: "Minneapolis History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Minneapolis.",
    },
    {
      title: "Minneapolis Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Minneapolis.",
    },
    {
      title: "Hidden Corners of Minneapolis",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Minneapolis.",
    },
    {
      title: "Minneapolis Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Minneapolis at golden hour.",
    },
  ],
  "tampa": [
    {
      title: "Tampa Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Tampa with curated tasting stops.",
    },
    {
      title: "Tampa Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Tampa.",
    },
    {
      title: "Tampa History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Tampa.",
    },
    {
      title: "Tampa Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Tampa at golden hour.",
    },
    {
      title: "Hidden Corners of Tampa",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Tampa.",
    },
  ],
  "baltimore": [
    {
      title: "Baltimore History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Baltimore.",
    },
    {
      title: "Baltimore Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Baltimore.",
    },
    {
      title: "Baltimore Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Baltimore.",
    },
    {
      title: "Baltimore Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Baltimore at golden hour.",
    },
  ],
  "charlotte": [
    {
      title: "Charlotte Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Charlotte with curated tasting stops.",
    },
    {
      title: "Charlotte Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Charlotte.",
    },
    {
      title: "Hidden Corners of Charlotte",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Charlotte.",
    },
  ],
  "indianapolis": [
    {
      title: "Indianapolis Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Indianapolis with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Indianapolis",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Indianapolis.",
    },
    {
      title: "Indianapolis Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Indianapolis at golden hour.",
    },
    {
      title: "Indianapolis History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Indianapolis.",
    },
    {
      title: "Indianapolis Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Indianapolis.",
    },
  ],
  "columbus": [
    {
      title: "Columbus Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Columbus.",
    },
    {
      title: "Columbus Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Columbus at golden hour.",
    },
    {
      title: "Columbus Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Columbus with curated tasting stops.",
    },
    {
      title: "Columbus Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Columbus.",
    },
    {
      title: "Columbus History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Columbus.",
    },
  ],
  "fort-worth": [
    {
      title: "Fort Worth Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Fort Worth at golden hour.",
    },
    {
      title: "Hidden Corners of Fort Worth",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Fort Worth.",
    },
    {
      title: "Fort Worth Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Fort Worth.",
    },
  ],
  "san-jose": [
    {
      title: "San Jose Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in San Jose.",
    },
    {
      title: "San Jose History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped San Jose.",
    },
    {
      title: "Hidden Corners of San Jose",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of San Jose.",
    },
    {
      title: "San Jose Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in San Jose with curated tasting stops.",
    },
    {
      title: "San Jose Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in San Jose.",
    },
  ],
  "jacksonville": [
    {
      title: "Jacksonville Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Jacksonville.",
    },
    {
      title: "Jacksonville History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Jacksonville.",
    },
    {
      title: "Jacksonville Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Jacksonville with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Jacksonville",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Jacksonville.",
    },
  ],
  "salt-lake-city": [
    {
      title: "Hidden Corners of Salt Lake City",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Salt Lake City.",
    },
    {
      title: "Salt Lake City History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Salt Lake City.",
    },
    {
      title: "Salt Lake City Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Salt Lake City with curated tasting stops.",
    },
    {
      title: "Salt Lake City Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Salt Lake City at golden hour.",
    },
    {
      title: "Salt Lake City Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Salt Lake City.",
    },
  ],
  "raleigh": [
    {
      title: "Raleigh Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Raleigh.",
    },
    {
      title: "Raleigh History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Raleigh.",
    },
    {
      title: "Raleigh Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Raleigh.",
    },
    {
      title: "Hidden Corners of Raleigh",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Raleigh.",
    },
    {
      title: "Raleigh Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Raleigh at golden hour.",
    },
  ],
  "memphis": [
    {
      title: "Memphis Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Memphis.",
    },
    {
      title: "Hidden Corners of Memphis",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Memphis.",
    },
    {
      title: "Memphis Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Memphis with curated tasting stops.",
    },
    {
      title: "Memphis Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Memphis.",
    },
    {
      title: "Memphis History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Memphis.",
    },
  ],
  "nashville": [
    {
      title: "Nashville Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Nashville with curated tasting stops.",
    },
    {
      title: "Nashville Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Nashville.",
    },
    {
      title: "Hidden Corners of Nashville",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Nashville.",
    },
  ],
  "louisville": [
    {
      title: "Louisville History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Louisville.",
    },
    {
      title: "Louisville Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Louisville.",
    },
    {
      title: "Hidden Corners of Louisville",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Louisville.",
    },
    {
      title: "Louisville Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Louisville.",
    },
    {
      title: "Louisville Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Louisville with curated tasting stops.",
    },
  ],
  "milan-test": [
    {
      title: "Milan Test Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Milan Test.",
    },
    {
      title: "Hidden Corners of Milan Test",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Milan Test.",
    },
    {
      title: "Milan Test Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Milan Test with curated tasting stops.",
    },
  ],
  "test-new-city": [
    {
      title: "Test New City Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Test New City.",
    },
    {
      title: "Test New City Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Test New City with curated tasting stops.",
    },
    {
      title: "Test New City Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Test New City.",
    },
    {
      title: "Hidden Corners of Test New City",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Test New City.",
    },
  ],
  "test-clean-state": [
    {
      title: "Test Clean State Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Test Clean State.",
    },
    {
      title: "Test Clean State Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Test Clean State with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Test Clean State",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Test Clean State.",
    },
    {
      title: "Test Clean State Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Test Clean State.",
    },
  ],
  "test-pull-rebase-city": [
    {
      title: "Test Pull Rebase City Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Test Pull Rebase City.",
    },
    {
      title: "Test Pull Rebase City Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Test Pull Rebase City.",
    },
    {
      title: "Test Pull Rebase City Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Test Pull Rebase City with curated tasting stops.",
    },
    {
      title: "Hidden Corners of Test Pull Rebase City",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Test Pull Rebase City.",
    },
    {
      title: "Test Pull Rebase City Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Test Pull Rebase City at golden hour.",
    },
  ],
  "monaco": [
    {
      title: "Monaco Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Monaco.",
    },
    {
      title: "Monaco Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Monaco at golden hour.",
    },
    {
      title: "Monaco Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Monaco with curated tasting stops.",
    },
    {
      title: "Monaco Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Monaco.",
    },
  ],
  "andorra-la-vella": [
    {
      title: "Andorra la Vella History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Andorra la Vella.",
    },
    {
      title: "Andorra la Vella Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in Andorra la Vella.",
    },
    {
      title: "Andorra la Vella Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Andorra la Vella at golden hour.",
    },
  ],
  "san-marino": [
    {
      title: "San Marino Private Discovery Route",
      duration: "3 hours",
      description: "A curated route through signature areas and hidden gems in San Marino.",
    },
    {
      title: "San Marino Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around San Marino at golden hour.",
    },
    {
      title: "San Marino Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in San Marino.",
    },
    {
      title: "San Marino Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in San Marino with curated tasting stops.",
    },
  ],
  "liechtenstein": [
    {
      title: "Hidden Corners of Liechtenstein",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Liechtenstein.",
    },
    {
      title: "Liechtenstein Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Liechtenstein with curated tasting stops.",
    },
    {
      title: "Liechtenstein Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Liechtenstein at golden hour.",
    },
  ],
  "auckland-8125": [
    {
      title: "Auckland Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Auckland with curated tasting stops.",
    },
    {
      title: "Auckland History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Auckland.",
    },
    {
      title: "Hidden Corners of Auckland",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Auckland.",
    },
    {
      title: "Auckland Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Auckland at golden hour.",
    },
    {
      title: "Auckland Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Auckland.",
    },
  ],
  "osaka-6929": [
    {
      title: "Hidden Corners of Osaka",
      duration: "2.5 hours",
      description: "Explore lesser-known neighborhoods and stories that show the local side of Osaka.",
    },
    {
      title: "Osaka Food and Markets Walk",
      duration: "3 hours",
      description: "Discover local flavors and market culture in Osaka with curated tasting stops.",
    },
    {
      title: "Osaka Culture and Street Life",
      duration: "3.5 hours",
      description: "Experience neighborhood rhythms, architecture, and local culture in Osaka.",
    },
    {
      title: "Osaka Sunset Viewpoints",
      duration: "2 hours",
      description: "Visit scenic viewpoints and photogenic routes around Osaka at golden hour.",
    },
    {
      title: "Osaka History Highlights",
      duration: "2 hours",
      description: "Walk through key landmarks and historical moments that shaped Osaka.",
    },
  ],
};

export function getAiToursByCity(citySlug: string): CuratedTour[] {
  return aiTours[citySlug] ?? [];
}
