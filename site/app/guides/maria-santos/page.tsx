import type { Metadata } from "next";
import Link from "next/link";

import GuideAboutSection from "../../../components/GuideAboutSection";
import GuideProfileHeader from "../../../components/GuideProfileHeader";
import GuideToursGrid from "../../../components/GuideToursGrid";
import { DEMO_GUIDE_PROFILE } from "../../../data/demoGuideProfile";
import styles from "./page.module.css";

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

      <section className={`sectionSoft section ${styles.socialPresenceSection}`} aria-label="Guide social integrations">
        <header className={styles.socialHeader}>
          <h2>Social presence across platforms</h2>
          <p>
            Travelers can discover and validate your work through the channels where you already publish content.
          </p>
        </header>

        <div className={styles.platformChips} aria-label="Connected social platforms">
          {DEMO_GUIDE_PROFILE.connectedPlatforms.map((platform) => (
            <span key={platform} className={styles.platformChip}>
              {platform}
            </span>
          ))}
        </div>

        <div className={styles.socialGrid}>
          {DEMO_GUIDE_PROFILE.socialProfiles.map((profile) => (
            <a
              key={profile.platform}
              className={styles.socialCard}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${profile.platform} profile: ${profile.handle}`}
            >
              <p className={styles.socialPlatform}>{profile.platform}</p>
              <p className={styles.socialHandle}>{profile.handle}</p>
              <p className={styles.socialSignal}>{profile.signal}</p>
            </a>
          ))}
        </div>
      </section>

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
