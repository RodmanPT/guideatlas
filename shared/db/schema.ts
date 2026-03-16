export type GuideAtlasTables = {
  guides_waitlist: {
    id: string;
    name?: string;
    email: string;
    city: string;
    country?: string;
    tour_type?: string;
    created_at: string;
  };
  cities: {
    slug: string;
    name: string;
    country: string;
    latitude: number;
    longitude: number;
    city_image_url?: string;
    image_author?: string;
    image_source?: "unsplash" | "placeholder" | "legacy";
  };
};

export const TABLES = {
  guidesWaitlist: "guides_waitlist",
  cities: "cities",
} as const;
