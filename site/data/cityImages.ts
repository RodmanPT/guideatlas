export type CityImageSource = "unsplash" | "placeholder" | "legacy";

export type CityImageRecord = {
  city_image_url?: string;
  image_author?: string;
  image_source: CityImageSource;
};

export const CITY_IMAGE_MAP: Record<string, CityImageRecord> = {
  "lisbon": {
    city_image_url: "https://images.unsplash.com/photo-1645976442485-82a2d110fc07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxMaXNib24lMjBza3lsaW5lfGVufDB8MHx8fDE3NzM2ODM1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Remy Gieling",
    image_source: "unsplash",
  },
  "porto": {
    city_image_url: "https://images.unsplash.com/photo-1551387262-89b84c698e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxQb3J0byUyMHNreWxpbmV8ZW58MHwwfHx8MTc3MzY4MzUyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Kenzie De Schepper",
    image_source: "unsplash",
  },
  "madrid": {
    city_image_url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1400&q=80",
    image_source: "legacy",
  },
  "barcelona": {
    city_image_url: "https://images.unsplash.com/photo-1592303985550-82e3f38f1a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCYXJjZWxvbmElMjBza3lsaW5lfGVufDB8MHx8fDE3NzM2ODM3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Ansar Naib",
    image_source: "unsplash",
  },
  "rome": {
    city_image_url: "https://images.unsplash.com/photo-1676296469349-228ba6cdb4e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxSb21lJTIwc2t5bGluZXxlbnwwfDB8fHwxNzczNjgzNTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Tom Audagna",
    image_source: "unsplash",
  },
  "paris": {
    city_image_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
    image_source: "legacy",
  },
  "london": {
    city_image_url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80",
    image_source: "legacy",
  },
  "tokyo": {
    city_image_url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=80",
    image_source: "legacy",
  },
  "bangkok": {
    city_image_url: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCYW5na29rJTIwc2t5bGluZXxlbnwwfDB8fHwxNzczNjgzNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Andreas Brücker",
    image_source: "unsplash",
  },
  "new-york": {
    city_image_url: "https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&w=1400&q=80",
    image_source: "legacy",
  },
  "berlin": {
    city_image_url: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1400&q=80",
    image_source: "legacy",
  },
  "amsterdam": {
    city_image_url: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1400&q=80",
    image_source: "legacy",
  },
  "vienna": {
    city_image_url: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxWaWVubmElMjBza3lsaW5lfGVufDB8MHx8fDE3NzM2ODM1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Jacek Dylag",
    image_source: "unsplash",
  },
  "prague": {
    city_image_url: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1400&q=80",
    image_source: "legacy",
  },
  "istanbul": {
    city_image_url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=80",
    image_source: "legacy",
  },
  "dubai": {
    city_image_url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    image_source: "legacy",
  },
  "mexico-city": {
    city_image_url: "https://images.unsplash.com/photo-1717388835452-c9c8cda0002e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNZXhpY28lMjBDaXR5JTIwc2t5bGluZXxlbnwwfDB8fHwxNzczNjgzNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Diwei Zhu",
    image_source: "unsplash",
  },
  "sydney": {
    city_image_url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTeWRuZXklMjBza3lsaW5lfGVufDB8MHx8fDE3NzM2ODM1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Dan Freeman",
    image_source: "unsplash",
  },
  "seoul": {
    city_image_url: "https://images.unsplash.com/photo-1532649097480-b67d52743b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTZW91bCUyMHNreWxpbmV8ZW58MHwwfHx8MTc3MzY4MzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Ping Onganankun",
    image_source: "unsplash",
  },
  "athens": {
    city_image_url: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1400&q=80",
    image_source: "legacy",
  },
  "milan": {
    city_image_url: "https://images.unsplash.com/photo-1578731397127-52e569dcb46d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNaWxhbiUyMHNreWxpbmV8ZW58MHwwfHx8MTc3MzY4MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Gregory Smirnov",
    image_source: "unsplash",
  },
  "florence": {
    city_image_url: "https://images.unsplash.com/photo-1578262634053-eead874052be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxGbG9yZW5jZSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3MzY4MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Jonas Smith",
    image_source: "unsplash",
  },
  "venice": {
    city_image_url: "https://images.unsplash.com/photo-1754397397187-60b016139e30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxWZW5pY2UlMjBza3lsaW5lfGVufDB8MHx8fDE3NzM2ODE5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Ola Noland",
    image_source: "unsplash",
  },
  "naples": {
    city_image_url: "https://images.unsplash.com/photo-1739993701527-572eb0e212a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxOYXBsZXMlMjBza3lsaW5lfGVufDB8MHx8fDE3NzM2ODIyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Charlie Harland",
    image_source: "unsplash",
  },
  "palermo": {
    city_image_url: "https://images.unsplash.com/photo-1557760401-df753b7132cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxQYWxlcm1vJTIwc2t5bGluZXxlbnwwfDB8fHwxNzczNjgyMjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Uniq Trek",
    image_source: "unsplash",
  },
  "valencia": {
    city_image_url: "https://images.unsplash.com/photo-1751834296279-080da05c7f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxWYWxlbmNpYSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3MzcyNzI0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Raúl Mermans García",
    image_source: "unsplash",
  },
  "seville": {
    city_image_url: "https://images.unsplash.com/photo-1721860984026-74dfeceac964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTZXZpbGxlJTIwc2t5bGluZXxlbnwwfDB8fHwxNzczNzI3MjQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Alex",
    image_source: "unsplash",
  },
  "malaga": {
    city_image_url: "https://images.unsplash.com/photo-1581092667846-40028820f102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNYWxhZ2ElMjBza3lsaW5lfGVufDB8MHx8fDE3NzM3MjcyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "José Luis Rodríguez Martínez",
    image_source: "unsplash",
  },
  "granada": {
    city_image_url: "https://images.unsplash.com/photo-1759431769361-1e94879f3e78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxHcmFuYWRhJTIwc2t5bGluZXxlbnwwfDB8fHwxNzczNzI3MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "David Vives",
    image_source: "unsplash",
  },
  "bilbao": {
    city_image_url: "https://images.unsplash.com/photo-1567976788588-9e71aa8721f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCaWxiYW8lMjBza3lsaW5lfGVufDB8MHx8fDE3NzM4MTQ0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Neil Martin",
    image_source: "unsplash",
  },
  "marbella": {
    city_image_url: "https://images.unsplash.com/photo-1590074213862-a641d9c4030b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTcGFpbiUyMGNpdHklMjBza3lsaW5lfGVufDB8MHx8fDE3NzM4MTQ0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "seyfettin dincturk",
    image_source: "unsplash",
  },
  "nice": {
    city_image_url: "https://images.unsplash.com/photo-1578163679681-63f9c49a2c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxOaWNlJTIwc2t5bGluZXxlbnwwfDB8fHwxNzczODE0NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Jonas Smith",
    image_source: "unsplash",
  },
  "lyon": {
    city_image_url: "https://images.unsplash.com/photo-1513291082152-9a9beccfc580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxMeW9uJTIwc2t5bGluZXxlbnwwfDB8fHwxNzczODE0NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Julien Rocheblave",
    image_source: "unsplash",
  },
  "marseille": {
    city_image_url: "https://images.unsplash.com/photo-1660851993694-05c2683633f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNYXJzZWlsbGUlMjBza3lsaW5lfGVufDB8MHx8fDE3NzM4MTQ3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Zhu Yunxiao",
    image_source: "unsplash",
  },
};

export function getCityImage(citySlug: string): CityImageRecord | undefined {
  return CITY_IMAGE_MAP[citySlug];
}

export function getCityImageUrl(citySlug: string): string | undefined {
  return CITY_IMAGE_MAP[citySlug]?.city_image_url;
}
