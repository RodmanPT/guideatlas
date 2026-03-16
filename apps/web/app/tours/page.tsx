import type { Metadata } from "next";

import DestinationCard from "../../components/DestinationCard";
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
    <main className="pageMain">
      <section className="hero heroCompact">
        <p className="heroKicker">Destinations</p>
        <h1>Explore Tours by City</h1>
        <p>Find local experiences around the world and discover where GuideAtlas is launching first.</p>
      </section>

      <section className="section">
        <div className="destinationGrid">
          {CITIES.map((city) => (
            <DestinationCard
              key={city.slug}
              href={getCityToursUrl(city.slug)}
              citySlug={city.slug}
              cityName={city.name}
              country={city.country}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
