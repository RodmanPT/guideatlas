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
};

export function getCityImage(citySlug: string): CityImageRecord | undefined {
  return CITY_IMAGE_MAP[citySlug];
}

export function getCityImageUrl(citySlug: string): string | undefined {
  return CITY_IMAGE_MAP[citySlug]?.city_image_url;
}
