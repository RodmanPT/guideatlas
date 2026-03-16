const CITY_IMAGE_MAP: Record<string, string> = {
  lisbon:
    "https://images.unsplash.com/photo-1525207934214-58e69a8f8a8b?auto=format&fit=crop&w=1400&q=80",
  porto:
    "https://images.unsplash.com/photo-1526401485004-2aa7c11e1a7c?auto=format&fit=crop&w=1400&q=80",
  madrid:
    "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1400&q=80",
  barcelona:
    "https://images.unsplash.com/photo-1509803874385-db7c23652552?auto=format&fit=crop&w=1400&q=80",
  rome:
    "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=1400&q=80",
  paris:
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
  london:
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80",
  tokyo:
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=80",
  bangkok:
    "https://images.unsplash.com/photo-1540610615066-8e7e9278d2b3?auto=format&fit=crop&w=1400&q=80",
  "new-york":
    "https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&w=1400&q=80",
  berlin:
    "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1400&q=80",
  amsterdam:
    "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1400&q=80",
  vienna:
    "https://images.unsplash.com/photo-1516550893885-9857f4f4f5ce?auto=format&fit=crop&w=1400&q=80",
  prague:
    "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1400&q=80",
  istanbul:
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=80",
  athens:
    "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1400&q=80",
  dubai:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
  milan:
    "https://images.unsplash.com/photo-1512236076010-1f2a0f4dbd1c?auto=format&fit=crop&w=1400&q=80",
};

export function getCityImageUrl(citySlug: string, cityName: string): string {
  const mapped = CITY_IMAGE_MAP[citySlug];
  if (mapped) return mapped;

  const cityQuery = encodeURIComponent(`${cityName} cityscape travel`);
  return `https://source.unsplash.com/1600x1000/?${cityQuery}`;
}
