import type { Metadata } from "next";

import TourCreateForm from "../../../components/TourCreateForm";

export const metadata: Metadata = {
  title: "Publish Tour | GuideAtlas",
  description: "Create and publish a tour so travelers can discover it by city.",
  openGraph: {
    title: "Publish Tour | GuideAtlas",
    description: "Create and publish a tour so travelers can discover it by city.",
    type: "website",
  },
};

type PageProps = {
  searchParams?: {
    guide?: string;
    city?: string;
  };
};

export default function NewTourPage({ searchParams }: PageProps) {
  const initialGuideSlug = (searchParams?.guide ?? "").trim();
  const initialCity = (searchParams?.city ?? "").trim();

  return (
    <main className="pageMain">
      <section className="hero heroCompact">
        <h1>Publish a tour</h1>
        <p>Add your tour details and make it discoverable on GuideAtlas city pages.</p>
      </section>

      <TourCreateForm initialGuideSlug={initialGuideSlug} initialCity={initialCity} />
    </main>
  );
}

