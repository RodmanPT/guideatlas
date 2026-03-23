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
    city_image_url: "https://images.unsplash.com/photo-1692461939118-6610e751d608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxEdWJsaW4lMjBza3lsaW5lfGVufDB8MHx8fDE3NzQyNDY3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Richard von Pfeil",
    image_source: "unsplash",
  },
  "edinburgh": {
    city_image_url: "https://images.unsplash.com/photo-1546617605-31567bc8c7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTczNTh8MHwxfHNlYXJjaHwxfHxFZGluYnVyZ2glMjBza3lsaW5lfGVufDB8MHx8fDE3NzQyNDY3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image_author: "Roan Lavery",
    image_source: "unsplash",
  },
};

export function getCityImage(citySlug: string): CityImageRecord | undefined {
  return CITY_IMAGE_MAP[citySlug];
}

export function getCityImageUrl(citySlug: string): string | undefined {
  return CITY_IMAGE_MAP[citySlug]?.city_image_url;
}
