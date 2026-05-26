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
  "bordeaux": {
    city_image_url: "https://images.unsplash.com/photo-1759405139024-f7f7dc3f12e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCb3JkZWF1eCUyMGNpdHlzY2FwZXxlbnwwfDB8fHwxNzczODE1MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Corentin Jaunault",
    image_source: "unsplash",
  },
  "toulouse": {
    city_image_url: "https://images.unsplash.com/photo-1475266389410-639095a9e568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxUb3Vsb3VzZSUyMGNpdHlzY2FwZXxlbnwwfDB8fHwxNzczOTAxMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Toa Heftiba",
    image_source: "unsplash",
  },
  "munich": {
    city_image_url: "https://images.unsplash.com/photo-1634150517084-d92b0e31439c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNdW5pY2glMjBza3lsaW5lfGVufDB8MHx8fDE3NzM5MDE0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Dovlet Hojayev",
    image_source: "unsplash",
  },
  "hamburg": {
    city_image_url: "https://images.unsplash.com/photo-1724028722169-42c94f20761c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxIYW1idXJnJTIwc2t5bGluZXxlbnwwfDB8fHwxNzczOTg3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Kirill Prikhodko",
    image_source: "unsplash",
  },
  "frankfurt": {
    city_image_url: "https://images.unsplash.com/photo-1607879344639-d5f8dec22a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxGcmFua2Z1cnQlMjBza3lsaW5lfGVufDB8MHx8fDE3NzM5ODgwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Raja Sen",
    image_source: "unsplash",
  },
  "cologne": {
    city_image_url: "https://images.unsplash.com/photo-1657304708590-13315349f3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxDb2xvZ25lJTIwc2t5bGluZXxlbnwwfDB8fHwxNzczOTg4MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Peter Herrmann",
    image_source: "unsplash",
  },
  "brussels": {
    city_image_url: "https://images.unsplash.com/photo-1690747072873-6a62628edf0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCcnVzc2VscyUyMHNreWxpbmV8ZW58MHwwfHx8MTc3Mzk4ODIwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Nils Erland",
    image_source: "unsplash",
  },
  "bruges": {
    city_image_url: "https://images.unsplash.com/photo-1678630604052-d5950b88c3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCcnVnZXMlMjBza3lsaW5lfGVufDB8MHx8fDE3NzM5ODgyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Dan V",
    image_source: "unsplash",
  },
  "antwerp": {
    city_image_url: "https://images.unsplash.com/photo-1610720557151-782b70eacb2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxBbnR3ZXJwJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc0MDczNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Mick Truyts",
    image_source: "unsplash",
  },
  "rotterdam": {
    city_image_url: "https://images.unsplash.com/photo-1614521272693-73052eaefc51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxSb3R0ZXJkYW0lMjBza3lsaW5lfGVufDB8MHx8fDE3NzQxNTkzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Dennis Möller",
    image_source: "unsplash",
  },
  "utrecht": {
    city_image_url: "https://images.unsplash.com/photo-1548368698-c656954f39c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxVdHJlY2h0JTIwc2t5bGluZXxlbnwwfDB8fHwxNzc0MTU5Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Friso Baaij",
    image_source: "unsplash",
  },
  "the-hague": {
    city_image_url: "https://images.unsplash.com/photo-1719732882413-167d9c493a93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxUaGUlMjBIYWd1ZSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NDE1OTU5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Alireza Parpaei",
    image_source: "unsplash",
  },
  "copenhagen": {
    city_image_url: "https://images.unsplash.com/photo-1548186879-9a93eed687ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxDb3BlbmhhZ2VuJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc0MTU5NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Lindsay Martin",
    image_source: "unsplash",
  },
  "stockholm": {
    city_image_url: "https://images.unsplash.com/photo-1564924304464-8cee6c450e7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTdG9ja2hvbG0lMjBza3lsaW5lfGVufDB8MHx8fDE3NzQyNDY1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Johan Anblick",
    image_source: "unsplash",
  },
  "oslo": {
    city_image_url: "https://images.unsplash.com/photo-1433757741270-94a3bcadc2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxPc2xvJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc0MjQ2NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Christoffer Engström",
    image_source: "unsplash",
  },
  "helsinki": {
    city_image_url: "https://images.unsplash.com/photo-1683119167545-c7ba61e6c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxIZWxzaW5raSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NDI0NjY0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Martti Salmi",
    image_source: "unsplash",
  },
  "dublin": {
    city_image_url: "https://images.unsplash.com/photo-1692461939118-6610e751d608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxEdWJsaW4lMjBza3lsaW5lfGVufDB8MHx8fDE3NzQ0MTkyODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Richard von Pfeil",
    image_source: "unsplash",
  },
  "edinburgh": {
    city_image_url: "https://images.unsplash.com/photo-1566415435578-25e8e3c9aae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxFZGluYnVyZ2glMjBza3lsaW5lfGVufDB8MHx8fDE3NzQ0MTkzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Lāsma Artmane",
    image_source: "unsplash",
  },
  "manchester": {
    city_image_url: "https://images.unsplash.com/photo-1724135869739-6055627ba5df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNYW5jaGVzdGVyJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc0MzMzODg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Mylo Kaye",
    image_source: "unsplash",
  },
  "liverpool": {
    city_image_url: "https://images.unsplash.com/photo-1566328386592-86058b1a8938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxMaXZlcnBvb2wlMjBza3lsaW5lfGVufDB8MHx8fDE3NzQ0MTk0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Neil Martin",
    image_source: "unsplash",
  },
  "bath": {
    city_image_url: "https://images.unsplash.com/photo-1730613774928-d4bee60d8543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCYXRoJTIwY2l0eXNjYXBlfGVufDB8MHx8fDE3NzQ0MTk1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Kat",
    image_source: "unsplash",
  },
  "budapest": {
    city_image_url: "https://images.unsplash.com/photo-1618148238267-fc3340c1a1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCdWRhcGVzdCUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NDU5MjUwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Andres Garcia",
    image_source: "unsplash",
  },
  "krakow": {
    city_image_url: "https://images.unsplash.com/photo-1761073991372-58f6376ea3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxLcmFrb3clMjBza3lsaW5lfGVufDB8MHx8fDE3NzQ1OTI1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Jan Ryszka",
    image_source: "unsplash",
  },
  "warsaw": {
    city_image_url: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxXYXJzYXclMjBza3lsaW5lfGVufDB8MHx8fDE3NzQ1OTI2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Kamil Gliwiński",
    image_source: "unsplash",
  },
  "zagreb": {
    city_image_url: "https://images.unsplash.com/photo-1511815364177-9e267595a13d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxaYWdyZWIlMjBza3lsaW5lfGVufDB8MHx8fDE3NzQ1OTI2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Borna Bevanda",
    image_source: "unsplash",
  },
  "split": {
    city_image_url: "https://images.unsplash.com/photo-1766932189685-f840e6590291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTcGxpdCUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NDU5MjczMHww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "SERGEI BEZZUBOV",
    image_source: "unsplash",
  },
  "dubrovnik": {
    city_image_url: "https://images.unsplash.com/photo-1474922651267-219b23864ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxEdWJyb3ZuaWslMjBjaXR5c2NhcGV8ZW58MHwwfHx8MTc3NDU5Mjc2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Jonathan Smith",
    image_source: "unsplash",
  },
  "ljubljana": {
    city_image_url: "https://images.unsplash.com/photo-1631467907130-96dc813e7e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxManVibGphbmElMjBza3lsaW5lfGVufDB8MHx8fDE3NzQ1OTI3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Jens Maes",
    image_source: "unsplash",
  },
  "bucharest": {
    city_image_url: "https://images.unsplash.com/photo-1723096111835-b3a2bc9e6b53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCdWNoYXJlc3QlMjBza3lsaW5lfGVufDB8MHx8fDE3NzQ2NzgyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Jakub Żerdzicki",
    image_source: "unsplash",
  },
  "sofia": {
    city_image_url: "https://images.unsplash.com/photo-1581278102531-39826e3614c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTb2ZpYSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NDY3ODMzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Evgeniy Grozev",
    image_source: "unsplash",
  },
  "tirana": {
    city_image_url: "https://images.unsplash.com/photo-1528563066973-f5e4230fc89f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxUaXJhbmElMjBjaXR5c2NhcGV8ZW58MHwwfHx8MTc3NDY3ODMzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Alexandr Bormotin",
    image_source: "unsplash",
  },
  "belgrade": {
    city_image_url: "https://images.unsplash.com/photo-1589415804227-ad6e820ef000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCZWxncmFkZSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NDc2MDcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Ivan Aleksic",
    image_source: "unsplash",
  },
  "reykjavik": {
    city_image_url: "https://images.unsplash.com/photo-1599885731271-3d49f55cc6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxSZXlramF2aWslMjBza3lsaW5lfGVufDB8MHx8fDE3NzQ3NjA4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Kalea",
    image_source: "unsplash",
  },
  "zurich": {
    city_image_url: "https://images.unsplash.com/photo-1601840698423-4a31d1a66653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxadXJpY2glMjBza3lsaW5lfGVufDB8MHx8fDE3NzQ3NjA5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Thimo Pedersen",
    image_source: "unsplash",
  },
  "geneva": {
    city_image_url: "https://images.unsplash.com/photo-1771504184695-c2dfceb8e08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxHZW5ldmElMjBza3lsaW5lfGVufDB8MHx8fDE3NzQ3NjExODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Bohodarov Matfei",
    image_source: "unsplash",
  },
  "lucerne": {
    city_image_url: "https://images.unsplash.com/photo-1651918694282-83d6486526bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxMdWNlcm5lJTIwY2l0eXNjYXBlfGVufDB8MHx8fDE3NzQ3NjExOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Anant Chandra",
    image_source: "unsplash",
  },
  "vienna-woods": {
    city_image_url: "https://images.unsplash.com/photo-1739706518717-1de7b305feec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxWaWVubmElMjBXb29kcyUyMGNpdHlzY2FwZXxlbnwwfDB8fHwxNzc0ODQ3NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Bernd 📷 Dittrich",
    image_source: "unsplash",
  },
  "santorini": {
    city_image_url: "https://images.unsplash.com/photo-1629314402955-7ba8546a9f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTYW50b3JpbmklMjBza3lsaW5lfGVufDB8MHx8fDE3NzQ4NDc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Florian Wehde",
    image_source: "unsplash",
  },
  "mykonos": {
    city_image_url: "https://images.unsplash.com/photo-1614855173752-5de77de2b961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNeWtvbm9zJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc0OTM0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Dan V",
    image_source: "unsplash",
  },
  "crete": {
    city_image_url: "https://images.unsplash.com/photo-1534097530100-c6d144a2bbec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxDcmV0ZSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NDkzNTQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "John Mark Arnold",
    image_source: "unsplash",
  },
  "jerusalem": {
    city_image_url: "https://images.unsplash.com/photo-1763966461585-41a652f12dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxKZXJ1c2FsZW0lMjBza3lsaW5lfGVufDB8MHx8fDE3NzQ5MzU2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "amr Sandouka",
    image_source: "unsplash",
  },
  "tel-aviv": {
    city_image_url: "https://images.unsplash.com/photo-1695910410678-6731d8577dc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxUZWwlMjBBdml2JTIwc2t5bGluZXxlbnwwfDB8fHwxNzc0OTM1NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "JR Ross",
    image_source: "unsplash",
  },
  "cairo": {
    city_image_url: "https://images.unsplash.com/photo-1679238211153-546821b75f98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxDYWlybyUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NTAyMTA4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Michael Starkie",
    image_source: "unsplash",
  },
  "marrakesh": {
    city_image_url: "https://images.unsplash.com/photo-1760681555537-833d76bd466d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNYXJyYWtlc2glMjBza3lsaW5lfGVufDB8MHx8fDE3NzUwMjEyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Peter Thomas",
    image_source: "unsplash",
  },
  "casablanca": {
    city_image_url: "https://images.unsplash.com/photo-1713967245835-279ac4ee83f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxDYXNhYmxhbmNhJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc1MDIxMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Imad Ghazal",
    image_source: "unsplash",
  },
  "fez": {
    city_image_url: "https://images.unsplash.com/photo-1549565396-99c901793c46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxGZXolMjBza3lsaW5lfGVufDB8MHx8fDE3NzUxOTM0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Carlos Torres",
    image_source: "unsplash",
  },
  "cape-town": {
    city_image_url: "https://images.unsplash.com/photo-1679128991873-c8ae350fe8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxDYXBlJTIwVG93biUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NTE5MzQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Waldo Piater",
    image_source: "unsplash",
  },
  "johannesburg": {
    city_image_url: "https://images.unsplash.com/photo-1636706519609-988babca3dd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxKb2hhbm5lc2J1cmclMjBza3lsaW5lfGVufDB8MHx8fDE3NzUyNzk5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Simon Hurry",
    image_source: "unsplash",
  },
  "nairobi": {
    city_image_url: "https://images.unsplash.com/photo-1735837836882-559fd3ab1a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxOYWlyb2JpJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc1Mjc5OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Sweder Breet",
    image_source: "unsplash",
  },
  "zanzibar-city": {
    city_image_url: "https://images.unsplash.com/photo-1632751308842-6afb9d23d402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxaYW56aWJhciUyMENpdHklMjBza3lsaW5lfGVufDB8MHx8fDE3NzUzNjY4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Jossuha Théophile",
    image_source: "unsplash",
  },
  "doha": {
    city_image_url: "https://images.unsplash.com/photo-1700901742651-6b353164caf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxEb2hhJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc1NDUyMjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Popup Agency",
    image_source: "unsplash",
  },
  "abu-dhabi": {
    city_image_url: "https://images.unsplash.com/photo-1624317937315-0ced8736c9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxBYnUlMjBEaGFiaSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NTUzODU3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Kevin JD",
    image_source: "unsplash",
  },
  "muscat": {
    city_image_url: "https://images.unsplash.com/photo-1763377220339-de687c3efad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNdXNjYXQlMjBza3lsaW5lfGVufDB8MHx8fDE3NzU1Mzg1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Andy Arbeit",
    image_source: "unsplash",
  },
  "riyadh": {
    city_image_url: "https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxSaXlhZGglMjBza3lsaW5lfGVufDB8MHx8fDE3NzU2MjQ2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "سيف الظاهر",
    image_source: "unsplash",
  },
  "jeddah": {
    city_image_url: "https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTYXVkaSUyMEFyYWJpYSUyMGNpdHklMjBza3lsaW5lfGVufDB8MHx8fDE3NzU2MjQ3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "سيف الظاهر",
    image_source: "unsplash",
  },
  "mumbai": {
    city_image_url: "https://images.unsplash.com/photo-1666843527155-14ec5f016802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNdW1iYWklMjBza3lsaW5lfGVufDB8MHx8fDE3NzU2MjQ3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Nishith Parikh",
    image_source: "unsplash",
  },
  "new-delhi": {
    city_image_url: "https://images.unsplash.com/photo-1695667424131-a9680e0307ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxOZXclMjBEZWxoaSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NTcxMTU2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Richard Khuptong",
    image_source: "unsplash",
  },
  "jaipur": {
    city_image_url: "https://images.unsplash.com/photo-1599982133112-2723acedc13a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxKYWlwdXIlMjBza3lsaW5lfGVufDB8MHx8fDE3NzU3MTE1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Naman Pandey",
    image_source: "unsplash",
  },
  "agra": {
    city_image_url: "https://images.unsplash.com/photo-1599038442598-0bee725c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxBZ3JhJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc1NzExNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Naman Pandey",
    image_source: "unsplash",
  },
  "goa": {
    city_image_url: "https://images.unsplash.com/photo-1724125036694-6031ce4f3bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxHb2ElMjBkb3dudG93bnxlbnwwfDB8fHwxNzc1NzEzMDQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Roshan Kmr",
    image_source: "unsplash",
  },
  "kathmandu": {
    city_image_url: "https://images.unsplash.com/photo-1755065780597-8711c7c8e67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxLYXRobWFuZHUlMjBza3lsaW5lfGVufDB8MHx8fDE3NzU3MTMwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Sushanta Rokka",
    image_source: "unsplash",
  },
  "colombo": {
    city_image_url: "https://images.unsplash.com/photo-1765153743373-488f6107948d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxDb2xvbWJvJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc1Nzk4NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Dmitriy Sarychev",
    image_source: "unsplash",
  },
  "male": {
    city_image_url: "https://images.unsplash.com/photo-1633223831274-5b3cf2221715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNYWxlJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc1ODg1Mzc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Nima Motaghian Nejad",
    image_source: "unsplash",
  },
  "singapore": {
    city_image_url: "https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBza3lsaW5lfGVufDB8MHx8fDE3NzU5NzE2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Swapnil Bapat",
    image_source: "unsplash",
  },
  "kuala-lumpur": {
    city_image_url: "https://images.unsplash.com/photo-1620735672554-78d140f81ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxLdWFsYSUyMEx1bXB1ciUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NTk3MTY5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Yusdi Hassan",
    image_source: "unsplash",
  },
  "penang": {
    city_image_url: "https://images.unsplash.com/photo-1565880429899-dade69d11f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxQZW5hbmclMjBza3lsaW5lfGVufDB8MHx8fDE3NzYwNTc5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Roberto Reposo",
    image_source: "unsplash",
  },
  "ho-chi-minh-city": {
    city_image_url: "https://images.unsplash.com/photo-1592114631383-89cafc376ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxIbyUyMENoaSUyME1pbmglMjBDaXR5JTIwc2t5bGluZXxlbnwwfDB8fHwxNzc2MDU4MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "CreateTravel.tv",
    image_source: "unsplash",
  },
  "hanoi": {
    city_image_url: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxIYW5vaSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NjA1ODMwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Minh Luu (Minhluu.com & AA+Photography)",
    image_source: "unsplash",
  },
  "da-nang": {
    city_image_url: "https://images.unsplash.com/photo-1737423808372-37f1f5bcc387?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxEYSUyME5hbmclMjBza3lsaW5lfGVufDB8MHx8fDE3NzYxNDM5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Igor Savelev",
    image_source: "unsplash",
  },
  "siem-reap": {
    city_image_url: "https://images.unsplash.com/photo-1684142635488-5fd19583d2e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTaWVtJTIwUmVhcCUyMGNpdHlzY2FwZXxlbnwwfDB8fHwxNzc2MTQ0MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Ammar Andiko",
    image_source: "unsplash",
  },
  "phnom-penh": {
    city_image_url: "https://images.unsplash.com/photo-1707922069493-318a1ac46183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxQaG5vbSUyMFBlbmglMjBza3lsaW5lfGVufDB8MHx8fDE3NzYxNDQwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Siborey Sean",
    image_source: "unsplash",
  },
  "luang-prabang": {
    city_image_url: "https://images.unsplash.com/photo-1773643331861-96242b012c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxMdWFuZyUyMFByYWJhbmclMjBza3lsaW5lfGVufDB8MHx8fDE3NzYyMjk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Onin Elijorde",
    image_source: "unsplash",
  },
  "jakarta": {
    city_image_url: "https://images.unsplash.com/photo-1679239108020-aca50acd5f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxKYWthcnRhJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc2MjI5NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Rafli Raihan",
    image_source: "unsplash",
  },
  "bali": {
    city_image_url: "https://images.unsplash.com/photo-1608387371285-5e687134efa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCYWxpJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc2MzE2MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Darya Jum",
    image_source: "unsplash",
  },
  "yogyakarta": {
    city_image_url: "https://images.unsplash.com/photo-1767063238352-ddbb40516c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxZb2d5YWthcnRhJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc2MzE2MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Anges Kei",
    image_source: "unsplash",
  },
  "manila": {
    city_image_url: "https://images.unsplash.com/photo-1501890664351-4ef399c1524f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBza3lsaW5lfGVufDB8MHx8fDE3NzY0MDIzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Andrey Andreyev",
    image_source: "unsplash",
  },
  "cebu-city": {
    city_image_url: "https://images.unsplash.com/photo-1701705994021-b21330a838a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwQ2l0eSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NjQwMjM3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Jaye Hernandez",
    image_source: "unsplash",
  },
  "hong-kong": {
    city_image_url: "https://images.unsplash.com/photo-1532455935509-eb76842cee50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxIb25nJTIwS29uZyUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NjQ5MDIwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "bady abbas",
    image_source: "unsplash",
  },
  "macau": {
    city_image_url: "https://images.unsplash.com/photo-1516037551965-fadf81e1bcc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNYWNhdSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NjU3NDkwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Wojciech Portnicki",
    image_source: "unsplash",
  },
  "beijing": {
    city_image_url: "https://images.unsplash.com/photo-1708660367433-01261c964b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCZWlqaW5nJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc2NTc0OTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "chen zy",
    image_source: "unsplash",
  },
  "shanghai": {
    city_image_url: "https://images.unsplash.com/photo-1627484986972-e544190b8abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTaGFuZ2hhaSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NjY2MjYzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Zhou Xian",
    image_source: "unsplash",
  },
  "xian": {
    city_image_url: "https://images.unsplash.com/photo-1773634742280-d5b7cec97362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxYaWFuJTIwY2l0eXNjYXBlfGVufDB8MHx8fDE3NzY2NjI2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "HsinKai Tai",
    image_source: "unsplash",
  },
  "guangzhou": {
    city_image_url: "https://images.unsplash.com/photo-1583996829982-823143cc975a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxHdWFuZ3pob3UlMjBza3lsaW5lfGVufDB8MHx8fDE3NzY3NDc3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Loeng Lig",
    image_source: "unsplash",
  },
  "kyoto": {
    city_image_url: "https://images.unsplash.com/photo-1670737565773-dc88b610d523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxLeW90byUyMHNreWxpbmV8ZW58MHwwfHx8MTc3Njc0Nzc1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Caleb Jack",
    image_source: "unsplash",
  },
  "osaka": {
    city_image_url: "https://images.unsplash.com/photo-1730621697678-eeb9db1c911d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxPc2FrYSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NjgzNTE3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Tsuyoshi Kozu",
    image_source: "unsplash",
  },
  "nara": {
    city_image_url: "https://images.unsplash.com/photo-1767519966878-6f5f9e105d65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxOYXJhJTIwY2l0eXNjYXBlfGVufDB8MHx8fDE3NzY4MzUxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "PJH",
    image_source: "unsplash",
  },
  "sapporo": {
    city_image_url: "https://images.unsplash.com/photo-1760444748935-3eee7cbbf7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTYXBwb3JvJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc2OTIwODU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Cuvii",
    image_source: "unsplash",
  },
  "fukuoka": {
    city_image_url: "https://images.unsplash.com/photo-1768749543016-f4b03e284e6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxGdWt1b2thJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc2OTIwODU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Yunosuke Sakai",
    image_source: "unsplash",
  },
  "taipei": {
    city_image_url: "https://images.unsplash.com/photo-1707849701975-1589ec35aad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxUYWlwZWklMjBza3lsaW5lfGVufDB8MHx8fDE3NzcwMDg1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Christie Chau",
    image_source: "unsplash",
  },
  "kaohsiung": {
    city_image_url: "https://images.unsplash.com/photo-1643719713418-3cb8bdabb04f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxLYW9oc2l1bmclMjBza3lsaW5lfGVufDB8MHx8fDE3NzcwMDg1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Johnson Hung",
    image_source: "unsplash",
  },
  "auckland": {
    city_image_url: "https://images.unsplash.com/photo-1602847189686-6bb361a3066d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxBdWNrbGFuZCUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NzA5MzM4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Sulthan Auliya",
    image_source: "unsplash",
  },
  "queenstown": {
    city_image_url: "https://images.unsplash.com/photo-1706795331036-77f5a7d47b91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxRdWVlbnN0b3duJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc3MTgxMzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Sung Jin Cho",
    image_source: "unsplash",
  },
  "melbourne": {
    city_image_url: "https://images.unsplash.com/photo-1595434971780-79d5c20c5090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNZWxib3VybmUlMjBza3lsaW5lfGVufDB8MHx8fDE3NzcyNjY1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Urlaubstracker",
    image_source: "unsplash",
  },
  "brisbane": {
    city_image_url: "https://images.unsplash.com/photo-1548661625-a30d197ce439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCcmlzYmFuZSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NzI2NjU5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Brisbane Local Marketing",
    image_source: "unsplash",
  },
  "perth": {
    city_image_url: "https://images.unsplash.com/photo-1662673053425-924b45c185d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxQZXJ0aCUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NzM1NDA5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Eddie Mark Blair",
    image_source: "unsplash",
  },
  "honolulu": {
    city_image_url: "https://images.unsplash.com/photo-1574502757458-57c806e33780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxIb25vbHVsdSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NzQzOTMwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Kharl Anthony Paica",
    image_source: "unsplash",
  },
  "los-angeles": {
    city_image_url: "https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxMb3MlMjBBbmdlbGVzJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc3NDM5MzAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Cedric Letsch",
    image_source: "unsplash",
  },
  "san-francisco": {
    city_image_url: "https://images.unsplash.com/photo-1625726411847-8cbb60cc71e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTYW4lMjBGcmFuY2lzY28lMjBza3lsaW5lfGVufDB8MHx8fDE3Nzc1MjYzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Andrew Whitmore",
    image_source: "unsplash",
  },
  "las-vegas": {
    city_image_url: "https://images.unsplash.com/photo-1668261929011-4ade8c225292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxMYXMlMjBWZWdhcyUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NzUyNjUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Yves Scheuber",
    image_source: "unsplash",
  },
  "miami": {
    city_image_url: "https://images.unsplash.com/photo-1670861643063-0892c6fab1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNaWFtaSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3NzYxMjc0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Rolando Yera",
    image_source: "unsplash",
  },
  "orlando": {
    city_image_url: "https://images.unsplash.com/photo-1609184889233-eff6dd93def4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxPcmxhbmRvJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc3Njk4MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Mick Haupt",
    image_source: "unsplash",
  },
  "new-orleans": {
    city_image_url: "https://images.unsplash.com/photo-1586974325246-05d48d665f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxOZXclMjBPcmxlYW5zJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc3Njk4MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Kool C",
    image_source: "unsplash",
  },
  "chicago": {
    city_image_url: "https://images.unsplash.com/photo-1575380591643-b2c92368dc6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxDaGljYWdvJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc3Njk4MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Rohan Gangopadhyay",
    image_source: "unsplash",
  },
  "washington-dc": {
    city_image_url: "https://images.unsplash.com/13/unsplash_5243a2eb2bc02_1.JPG?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxXYXNoaW5ndG9uJTIwREMlMjBza3lsaW5lfGVufDB8MHx8fDE3Nzc3ODQ5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Vadim Sherbakov",
    image_source: "unsplash",
  },
  "boston": {
    city_image_url: "https://images.unsplash.com/photo-1565127803082-69dd82351360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCb3N0b24lMjBza3lsaW5lfGVufDB8MHx8fDE3Nzc3ODQ5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "jacob Licht",
    image_source: "unsplash",
  },
  "seattle": {
    city_image_url: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTZWF0dGxlJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc3Nzg0OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Thom Milkovic",
    image_source: "unsplash",
  },
  "vancouver": {
    city_image_url: "https://images.unsplash.com/photo-1647655806923-e8202f4f2b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxWYW5jb3V2ZXIlMjBza3lsaW5lfGVufDB8MHx8fDE3Nzc4NzE1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Adrian Yu",
    image_source: "unsplash",
  },
  "toronto": {
    city_image_url: "https://images.unsplash.com/photo-1559869824-929df9dab35e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc3ODcxNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Mathew Schwartz",
    image_source: "unsplash",
  },
  "montreal": {
    city_image_url: "https://images.unsplash.com/photo-1659482513037-950fea76794c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNb250cmVhbCUyMHNreWxpbmV8ZW58MHwwfHx8MTc3Nzk1ODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Grant Van Cleemput",
    image_source: "unsplash",
  },
  "quebec-city": {
    city_image_url: "https://images.unsplash.com/photo-1660426252696-fbf984cb4d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxRdWViZWMlMjBDaXR5JTIwc2t5bGluZXxlbnwwfDB8fHwxNzc4MDQ0NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Asif Ali",
    image_source: "unsplash",
  },
  "cancun": {
    city_image_url: "https://images.unsplash.com/photo-1745874699783-b54f3ce5c46b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxDYW5jdW4lMjBza3lsaW5lfGVufDB8MHx8fDE3NzgwNDQ2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Henrique Ferreira",
    image_source: "unsplash",
  },
  "playa-del-carmen": {
    city_image_url: "https://images.unsplash.com/photo-1767326388163-f48c8f77498d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxQbGF5YSUyMGRlbCUyMENhcm1lbiUyMGNpdHlzY2FwZXxlbnwwfDB8fHwxNzc4MDQ0NjkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Juan Pablo",
    image_source: "unsplash",
  },
  "guadalajara": {
    city_image_url: "https://images.unsplash.com/photo-1709006596325-ec84d78954a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxHdWFkYWxhamFyYSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3ODEzMTM2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Sergio Rodríguez",
    image_source: "unsplash",
  },
  "bogota": {
    city_image_url: "https://images.unsplash.com/photo-1719537224742-dacf2e0e8b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCb2dvdGElMjBza3lsaW5lfGVufDB8MHx8fDE3NzgyMTY4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "WILLIAN REIS",
    image_source: "unsplash",
  },
  "medellin": {
    city_image_url: "https://images.unsplash.com/photo-1680209082240-1abf11585936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxNZWRlbGxpbiUyMHNreWxpbmV8ZW58MHwwfHx8MTc3ODMwNDU5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Juliana Morales Ramírez",
    image_source: "unsplash",
  },
  "cartagena": {
    city_image_url: "https://images.unsplash.com/photo-1707504223852-73216fc08c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxDYXJ0YWdlbmElMjBza3lsaW5lfGVufDB8MHx8fDE3NzgzOTAzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Lucas Chizzali",
    image_source: "unsplash",
  },
  "lima": {
    city_image_url: "https://images.unsplash.com/photo-1777198498621-d949c8fe4873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxMaW1hJTIwY2l0eXNjYXBlfGVufDB8MHx8fDE3Nzg0NzU3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Marc Wieland",
    image_source: "unsplash",
  },
  "cusco": {
    city_image_url: "https://images.unsplash.com/photo-1775352014386-4a1bfa631b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxDdXNjbyUyMHNreWxpbmV8ZW58MHwwfHx8MTc3ODQ3NjA3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Sheila C",
    image_source: "unsplash",
  },
  "santiago": {
    city_image_url: "https://images.unsplash.com/photo-1574450123591-d8aead67fff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTYW50aWFnbyUyMHNreWxpbmV8ZW58MHwwfHx8MTc3ODQ3NjA3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Guillermo Cádiz Pizarro",
    image_source: "unsplash",
  },
  "buenos-aires": {
    city_image_url: "https://images.unsplash.com/photo-1611865422861-391cf5f3ba49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCdWVub3MlMjBBaXJlcyUyMHNreWxpbmV8ZW58MHwwfHx8MTc3ODU2MzY3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Sebastian Cyrman",
    image_source: "unsplash",
  },
  "rio-de-janeiro": {
    city_image_url: "https://images.unsplash.com/photo-1551140804-0754d4b9652c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxSaW8lMjBkZSUyMEphbmVpcm8lMjBza3lsaW5lfGVufDB8MHx8fDE3Nzg2NDg5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Alessandro Queiroz",
    image_source: "unsplash",
  },
  "sao-paulo": {
    city_image_url: "https://images.unsplash.com/photo-1554168848-228452c09d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTYW8lMjBQYXVsbyUyMHNreWxpbmV8ZW58MHwwfHx8MTc3ODY0OTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Renan",
    image_source: "unsplash",
  },
  "salvador": {
    city_image_url: "https://images.unsplash.com/photo-1689489609164-400f31c5c6b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTYWx2YWRvciUyMGNpdHlzY2FwZXxlbnwwfDB8fHwxNzc4NjUxNzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Kylli Kittus",
    image_source: "unsplash",
  },
  "panama-city": {
    city_image_url: "https://images.unsplash.com/photo-1598041543955-0d88c390f3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxQYW5hbWElMjBDaXR5JTIwc2t5bGluZXxlbnwwfDB8fHwxNzc4NjUxNzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "JACQUELINE BRANDWAYN",
    image_source: "unsplash",
  },
  "san-jose-cr": {
    city_image_url: "https://images.unsplash.com/photo-1682963847132-1923d1e7928a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTYW4lMjBKb3NlJTIwY2l0eXNjYXBlfGVufDB8MHx8fDE3Nzg2NTIyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "César Badilla Miranda",
    image_source: "unsplash",
  },
  "fake-city-123": {
    city_image_url: "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxGYWtlJTIwQ2l0eSUyMDEyMyUyMGNpdHlzY2FwZXxlbnwwfDB8fHwxNzc4ODIzMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Devin Avery",
    image_source: "unsplash",
  },
  "glasgow": {
    city_image_url: "https://images.unsplash.com/photo-1567066275230-43936874f489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxHbGFzZ293JTIwY2l0eXNjYXBlfGVufDB8MHx8fDE3Nzg5MDg1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Eilis Garvey",
    image_source: "unsplash",
  },
  "birmingham": {
    city_image_url: "https://images.unsplash.com/photo-1499958060387-dbdb8d0994fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCaXJtaW5naGFtJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc4OTk0MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Luke Matthews",
    image_source: "unsplash",
  },
  "cardiff": {
    city_image_url: "https://images.unsplash.com/photo-1595273647789-54432cefc8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxDYXJkaWZmJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc4OTk0MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Mike Erskine",
    image_source: "unsplash",
  },
  "belfast": {
    city_image_url: "https://images.unsplash.com/photo-1651759660232-8c58ea8c0a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxCZWxmYXN0JTIwc2t5bGluZXxlbnwwfDB8fHwxNzc4OTk0MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Jack White",
    image_source: "unsplash",
  },
  "austin": {
    city_image_url: "https://images.unsplash.com/photo-1557335200-a65f7f032602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxBdXN0aW4lMjBza3lsaW5lfGVufDB8MHx8fDE3Nzg5OTQ0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "MJ Tangonan",
    image_source: "unsplash",
  },
  "denver": {
    city_image_url: "https://images.unsplash.com/photo-1709689702529-6fa1f343e108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxEZW52ZXIlMjBza3lsaW5lfGVufDB8MHx8fDE3NzkwODA2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Nils Huenerfuerst",
    image_source: "unsplash",
  },
  "houston": {
    city_image_url: "https://images.unsplash.com/photo-1692154600992-463fa9b27abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxIb3VzdG9uJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc5MTY4MDk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Jeswin Thomas",
    image_source: "unsplash",
  },
  "dallas": {
    city_image_url: "https://images.unsplash.com/photo-1625950019503-cae6a7825762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxEYWxsYXMlMjBza3lsaW5lfGVufDB8MHx8fDE3NzkyNTUwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Max Fray",
    image_source: "unsplash",
  },
  "phoenix": {
    city_image_url: "https://images.unsplash.com/photo-1729041534038-fdc1f9cf3d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxQaG9lbml4JTIwc2t5bGluZXxlbnwwfDB8fHwxNzc5MjU1MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Nils Huenerfuerst",
    image_source: "unsplash",
  },
  "philadelphia": {
    city_image_url: "https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxQaGlsYWRlbHBoaWElMjBza3lsaW5lfGVufDB8MHx8fDE3NzkzNDEzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "ActionVance",
    image_source: "unsplash",
  },
  "san-diego": {
    city_image_url: "https://images.unsplash.com/photo-1514939775307-d44e7f10cabd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTYW4lMjBEaWVnbyUyMHNreWxpbmV8ZW58MHwwfHx8MTc3OTQyNzYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Lucas Davies",
    image_source: "unsplash",
  },
  "san-antonio": {
    city_image_url: "https://images.unsplash.com/photo-1514510249063-e0faf6c6ec0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxTYW4lMjBBbnRvbmlvJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc5NDI3NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Matthew LeJune",
    image_source: "unsplash",
  },
  "omaha": {
    city_image_url: "https://images.unsplash.com/photo-1601780998888-0bfe1f4ca675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxPbWFoYSUyMHNreWxpbmV8ZW58MHwwfHx8MTc3OTUxMjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Tim Umphreys",
    image_source: "unsplash",
  },
  "atlanta": {
    city_image_url: "https://images.unsplash.com/photo-1663601460253-aba72eea6edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxBdGxhbnRhJTIwc2t5bGluZXxlbnwwfDB8fHwxNzc5NTk5NzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Lance Asper",
    image_source: "unsplash",
  },
  "kyiv": {
    city_image_url: "https://images.unsplash.com/photo-1773369366068-aa5d7b7bee8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxLeWl2JTIwc2t5bGluZXxlbnwwfDB8fHwxNzc5Njg2NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Nadin Nandin",
    image_source: "unsplash",
  },
  "test-mock-city": {
    city_image_url: "https://images.unsplash.com/photo-1575380591643-b2c92368dc6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxUZXN0JTIwTW9jayUyMENpdHklMjBza3lsaW5lfGVufDB8MHx8fDE3Nzk3NzMyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Rohan Gangopadhyay",
    image_source: "unsplash",
  },
};

export function getCityImage(citySlug: string): CityImageRecord | undefined {
  return CITY_IMAGE_MAP[citySlug];
}

export function getCityImageUrl(citySlug: string): string | undefined {
  return CITY_IMAGE_MAP[citySlug]?.city_image_url;
}
