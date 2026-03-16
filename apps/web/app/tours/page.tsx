import type { Metadata } from "next";
import Link from "next/link";

import { CITIES, cityToursPath } from "../../data/cities";

export const metadata: Metadata = {
  title: "Browse Tours by City | GuideAtlas",
  description: "Discover authentic tours led by independent local guides.",
  openGraph: {
    title: "Browse Tours by City | GuideAtlas",
    description: "Discover authentic tours led by independent local guides.",
    type: "website",
  },
};

export default function ToursByCityPage() {
  return (
    <main>
      <section className="hero">
        <h1>Browse Tours by City</h1>
        <p>Pick a destination and explore authentic experiences with independent local guides.</p>
      </section>

      <section className="grid" aria-label="Cities">
        {CITIES.map((city) => (
          <Link key={city.slug} className="card cardLink" href={cityToursPath(city.slug)}>
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

