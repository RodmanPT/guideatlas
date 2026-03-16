import type { Metadata } from "next";
import Link from "next/link";

import { CITIES } from "../../data/cities";
import { getCityToursUrl } from "../../lib/url";

export const metadata: Metadata = {
  title: "Explore Tours by City | GuideAtlas",
  description: "Explore tours around the world with independent local guides.",
  openGraph: {
    title: "Explore Tours by City | GuideAtlas",
    description: "Explore tours around the world with independent local guides.",
    type: "website",
  },
};

export default function ToursByCityPage() {
  return (
    <main>
      <section className="hero">
        <h1>Explore Tours by City</h1>
        <p>Travelers can discover authentic tours around the world with trusted independent local guides.</p>
      </section>

      <section className="grid" aria-label="Cities">
        {CITIES.map((city) => (
          <Link key={city.slug} className="card cardLink" href={getCityToursUrl(city.slug)}>
            <h2>{city.name}</h2>
            <p>{city.country}</p>
          </Link>
        ))}
      </section>

      <footer className="footer" aria-label="Footer">
        <Link href="/#join-guide">Become a Guide</Link>
        <span className="footerNote">GuideAtlas</span>
      </footer>
    </main>
  );
}
