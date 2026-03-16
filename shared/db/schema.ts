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
  guides_profiles: {
    id: string;
    slug: string;
    name: string;
    email: string;
    city: string;
    country: string;
    languages: string;
    bio: string;
    rating?: number;
    created_at: string;
  };
  tours: {
    id: string;
    guide_slug: string;
    guide_name: string;
    title: string;
    city: string;
    duration: string;
    price: string;
    description: string;
    meeting_point: string;
    created_at: string;
  };
  product_events: {
    event_name: string;
    path: string;
    city?: string;
    guide_slug?: string;
    tour_id?: string;
    metadata?: string;
    created_at: string;
  };
};

export const TABLES = {
  guidesWaitlist: "guides_waitlist",
  guidesProfiles: "guides_profiles",
  tours: "tours",
  productEvents: "product_events",
  cities: "cities",
} as const;
