import type { Metadata } from "next";

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
        <p>Join the waitlist to be invited as one of the first guides in your city.</p>
      </section>

      <BecomeGuideForm initialCity={initialCity} initialCountry={initialCountry} initialTour={initialTour} />
    </main>
  );
}
