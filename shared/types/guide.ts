export type Guide = {
  id: string;
  slug: string;
  name: string;
  email: string;
  city: string;
  country: string;
  languages: string[];
  bio: string;
  rating?: number;
  created_at: string;
};
