export function getCityToursUrl(citySlug: string): string {
  const normalized = citySlug.trim().toLowerCase();
  if (!normalized) throw new Error("getCityToursUrl: citySlug is empty");
  return `/${normalized}-tours`;
}

