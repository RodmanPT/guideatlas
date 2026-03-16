import type { Metadata } from "next";
import Link from "next/link";

import GuideAboutSection from "../../../components/GuideAboutSection";
import GuideProfileHeader from "../../../components/GuideProfileHeader";
import GuideToursGrid from "../../../components/GuideToursGrid";
import { DEMO_GUIDE_PROFILE } from "../../../data/demoGuideProfile";

export const metadata: Metadata = {
  title: "Maria Santos | Demo Guide Profile | GuideAtlas",
  description: "Demo guide profile showing how a local guide page appears on GuideAtlas.",
  openGraph: {
    title: "Maria Santos | Demo Guide Profile | GuideAtlas",
    description: "Demo guide profile showing how a local guide page appears on GuideAtlas.",
    type: "profile",
  },
};

export default function DemoGuideProfilePage() {
  return (
    <main className="pageMain">
      <p className="demoBanner">This is a demo profile showing how your guide page could appear.</p>

      <GuideProfileHeader
        name={DEMO_GUIDE_PROFILE.name}
        title={DEMO_GUIDE_PROFILE.title}
        photoUrl={DEMO_GUIDE_PROFILE.photoUrl}
        rating={DEMO_GUIDE_PROFILE.rating}
        travelersHosted={DEMO_GUIDE_PROFILE.travelersHosted}
        languages={DEMO_GUIDE_PROFILE.languages}
        yearsGuiding={DEMO_GUIDE_PROFILE.yearsGuiding}
      />

      <GuideAboutSection paragraphs={DEMO_GUIDE_PROFILE.about} />

      <GuideToursGrid tours={DEMO_GUIDE_PROFILE.tours} />

      <section className="ctaPanel section" aria-label="Create guide profile call to action">
        <h2>Ready to publish your own profile?</h2>
        <p>Create your guide page and start showcasing your tours to travelers.</p>
        <Link className="cta" href="/become-a-guide">
          Create your guide profile
        </Link>
      </section>
    </main>
  );
}

