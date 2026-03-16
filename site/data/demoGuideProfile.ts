export type DemoGuideTour = {
  id: string;
  title: string;
  duration: string;
  subtitle: string;
};

export type DemoGuideProfile = {
  slug: string;
  name: string;
  title: string;
  city: string;
  country: string;
  photoUrl: string;
  rating: number;
  travelersHosted: number;
  languages: string[];
  yearsGuiding: number;
  about: string[];
  tours: DemoGuideTour[];
};

export const DEMO_GUIDE_PROFILE: DemoGuideProfile = {
  slug: "maria-santos",
  name: "Maria Santos",
  title: "Local Guide in Lisbon",
  city: "Lisbon",
  country: "Portugal",
  photoUrl:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  rating: 4.9,
  travelersHosted: 120,
  languages: ["English", "Portuguese", "Spanish"],
  yearsGuiding: 6,
  about: [
    "Hi! I'm Maria, a Lisbon local passionate about history, hidden viewpoints and authentic Portuguese food.",
    "I've been guiding travelers through Lisbon for more than 6 years and love showing the city beyond the typical tourist routes.",
    "If you want to experience Lisbon like a local, I'd love to show you around.",
  ],
  tours: [
    {
      id: "demo-lisbon-viewpoints",
      title: "Lisbon Hidden Viewpoints Walk",
      duration: "3h",
      subtitle: "Small group experience",
    },
    {
      id: "demo-lisbon-food",
      title: "Lisbon Street Food Tour",
      duration: "2.5h",
      subtitle: "Includes food tastings",
    },
    {
      id: "demo-alfama-history",
      title: "Alfama History Walking Tour",
      duration: "2h",
      subtitle: "Explore Lisbon's oldest district",
    },
  ],
};

