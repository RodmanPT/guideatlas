import type { Metadata } from "next";
import Link from "next/link";

import BecomeGuideForm from "../../components/BecomeGuideForm";

export const metadata: Metadata = {
  title: "Become a Guide | GuideAtlas",
  description: "Claim an AI curated tour and join GuideAtlas as a local guide.",
  openGraph: {
    title: "Become a Guide | GuideAtlas",
    description: "Claim an AI curated tour and join GuideAtlas as a local guide.",
    type: "website",
  },
};

type PageProps = {
  searchParams?: {
    city?: string;
    country?: string;
    tour?: string;
  };
};

export default function BecomeGuidePage({ searchParams }: PageProps) {
  const initialCity = (searchParams?.city ?? "").trim();
  const initialCountry = (searchParams?.country ?? "").trim();
  const initialTour = (searchParams?.tour ?? "").trim();

  return (
    <main className="pageMain">
      <section className="hero heroCompact">
        <h1>Are you a local guide?</h1>
        <p>Create tours and share your city with travelers from around the world.</p>
        <div className="heroActions">
          <Link className="cta" href={`/guides/new${initialCity ? `?city=${encodeURIComponent(initialCity)}` : ""}`}>
            Create Guide Profile
          </Link>
          <Link className="cta ctaGhost ctaGhostDark" href="/tours/new">
            Publish a Tour
          </Link>
          <Link className="cta ctaGhost ctaGhostDark" href="/guides/maria-santos">
            See an example guide profile
          </Link>
        </div>
      </section>

      <BecomeGuideForm initialCity={initialCity} initialCountry={initialCountry} initialTour={initialTour} />
    </main>
  );
}
