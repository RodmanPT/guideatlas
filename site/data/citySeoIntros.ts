export type CitySeoIntros = Record<string, string>;

export const citySeoIntros: CitySeoIntros = {
  lisbon:
    "Discover the best tours in Lisbon, from food walks to historical explorations led by local guides.",
  porto:
    "Discover the best tours in Porto, from riverside walks to food and wine experiences led by local guides.",
  madrid:
    "Discover the best tours in Madrid, from tapas routes to historic district explorations led by local guides.",
  barcelona:
    "Discover the best tours in Barcelona, from Gothic Quarter walks to coastal culture experiences led by local guides.",
  rome:
    "Discover the best tours in Rome, from ancient landmarks to local neighborhood experiences led by local guides.",
  paris:
    "Discover the best tours in Paris, from art and culture walks to food-focused explorations led by local guides.",
  london:
    "Discover the best tours in London, from iconic landmarks to hidden neighborhood stories led by local guides.",
  tokyo:
    "Discover the best tours in Tokyo, from traditional districts to night city explorations led by local guides.",
  bangkok:
    "Discover the best tours in Bangkok, from street food routes to temple and canal explorations led by local guides.",
  "new-york":
    "Discover the best tours in New York, from neighborhood walks to cultural explorations led by local guides.",
  "berlin": "Discover the best tours in Berlin, from food walks to historical explorations led by local guides.",
  "amsterdam": "Discover the best tours in Amsterdam, from food walks to historical explorations led by local guides.",
  "venice": "Discover the best tours in Venice, from food walks to historical explorations led by local guides.",
  "naples": "Discover the best tours in Naples, from food walks to historical explorations led by local guides.",
  "palermo": "Discover the best tours in Palermo, from food walks to historical explorations led by local guides.",
  "valencia": "Discover the best tours in Valencia, from food walks to historical explorations led by local guides.",
  "seville": "Discover the best tours in Seville, from food walks to historical explorations led by local guides.",
  "malaga": "Discover the best tours in Malaga, from food walks to historical explorations led by local guides.",
  "granada": "Discover the best tours in Granada, from food walks to historical explorations led by local guides.",
  "bilbao": "Discover the best tours in Bilbao, from food walks to historical explorations led by local guides.",
  "marbella": "Discover the best tours in Marbella, from food walks to historical explorations led by local guides.",
  "nice": "Discover the best tours in Nice, from food walks to historical explorations led by local guides.",
  "lyon": "Discover the best tours in Lyon, from food walks to historical explorations led by local guides.",
  "marseille": "Discover the best tours in Marseille, from food walks to historical explorations led by local guides.",
  "bordeaux": "Discover the best tours in Bordeaux, from food walks to historical explorations led by local guides.",
  "toulouse": "Discover the best tours in Toulouse, from food walks to historical explorations led by local guides.",
  "munich": "Discover the best tours in Munich, from food walks to historical explorations led by local guides.",
  "hamburg": "Discover the best tours in Hamburg, from food walks to historical explorations led by local guides.",
  "frankfurt": "Discover the best tours in Frankfurt, from food walks to historical explorations led by local guides.",
  "cologne": "Discover the best tours in Cologne, from food walks to historical explorations led by local guides.",
  "brussels": "Discover the best tours in Brussels, from food walks to historical explorations led by local guides.",
  "bruges": "Discover the best tours in Bruges, from food walks to historical explorations led by local guides.",
  "antwerp": "Discover the best tours in Antwerp, from food walks to historical explorations led by local guides.",
  "rotterdam": "Discover the best tours in Rotterdam, from food walks to historical explorations led by local guides.",
  "utrecht": "Discover the best tours in Utrecht, from food walks to historical explorations led by local guides.",
  "the-hague": "Discover the best tours in The Hague, from food walks to historical explorations led by local guides.",
  "copenhagen": "Discover the best tours in Copenhagen, from food walks to historical explorations led by local guides.",
  "stockholm": "Discover the best tours in Stockholm, from food walks to historical explorations led by local guides.",
  "oslo": "Discover the best tours in Oslo, from food walks to historical explorations led by local guides.",
  "helsinki": "Discover the best tours in Helsinki, from food walks to historical explorations led by local guides.",
  "dublin": "Discover the best tours in Dublin, from food walks to historical explorations led by local guides.",
  "edinburgh": "Discover the best tours in Edinburgh, from food walks to historical explorations led by local guides.",
  "manchester": "Discover the best tours in Manchester, from food walks to historical explorations led by local guides.",
  "liverpool": "Discover the best tours in Liverpool, from food walks to historical explorations led by local guides.",
  "bath": "Discover the best tours in Bath, from food walks to historical explorations led by local guides.",
  "budapest": "Discover the best tours in Budapest, from food walks to historical explorations led by local guides.",
};

export function getCitySeoIntro(citySlug: string, cityName: string): string {
  return (
    citySeoIntros[citySlug] ??
    `Discover the best tours in ${cityName}, from food walks to historical explorations led by local guides.`
  );
}

