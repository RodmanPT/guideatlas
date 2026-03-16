export type City = {
  slug: string;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  city_image_url?: string;
  image_author?: string;
  image_source?: "unsplash" | "placeholder" | "legacy";
};
