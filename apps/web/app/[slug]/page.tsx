import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CITIES, cityToursPath, getCityBySlug } from "../../data/cities";

type PageProps = {
  params: { slug?: string };
};

const TOURS_SUFFIX = "-tours";

function extractCitySlug(slug: unknown): string | null {
  if (typeof slug !== "string") return null;
  const normalized = slug.trim().toLowerCase();
  if (!normalized.endsWith(TOURS_SUFFIX)) return null;
  const citySlug = normalized.slice(0, -TOURS_SUFFIX.length);
  return citySlug || null;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((city) => ({ slug: `${city.slug}${TOURS_SUFFIX}` }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const citySlug = extractCitySlug(params.slug);
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  if (!city) {
    return {
      title: "City Tours | GuideAtlas",
      description: "Discover authentic tours led by independent local guides.",
      robots: { index: false, follow: false },
    };
  }

  const title = `Discover the Best Tours in ${city.name} | GuideAtlas`;
  const description = `Discover authentic tours in ${city.name} led by independent local guides.`;
  const canonical = cityToursPath(city.slug);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default function CityToursPage({ params }: PageProps) {
  const citySlug = extractCitySlug(params.slug);
  const city = citySlug ? getCityBySlug(citySlug) : undefined;
  if (!city) {
    notFound();
  }

  return (
    <main>
      <section className="hero">
        <h1>Discover the Best Tours in {city.name}</h1>
        <p>
          Explore {city.name} with independent local guides. Find walking tours, food tours, historical
          experiences, and private options tailored to your pace.
        </p>
      </section>

      <section className="grid" id="types" aria-label={`Tour types in ${city.name}`}>
        <article className="card">
          <h2>Walking tours</h2>
          <p>Neighborhood highlights, viewpoints, and local stories on foot.</p>
        </article>
        <article className="card">
          <h2>Food tours</h2>
          <p>Taste the city with local markets, street food, and regional classics.</p>
        </article>
        <article className="card">
          <h2>Historical tours</h2>
          <p>Culture, landmarks, and deep context from guides who know the details.</p>
        </article>
        <article className="card">
          <h2>Private tours</h2>
          <p>Custom experiences for couples, families, and small groups.</p>
        </article>
      </section>

      <section className="ctaPanel" aria-label={`Traveler call to action for ${city.name}`}>
        <h2>Looking for a local guide in {city.name}?</h2>
        <p>We are building the best way to discover authentic experiences led by independent guides.</p>
        <a className="cta" href="#types">
          Browse Tours
        </a>
      </section>

      <section className="ctaPanel" aria-label={`Guide call to action for ${city.name}`}>
        <h2>Are you a guide in {city.name}?</h2>
        <p>Join the founding guide network and get early onboarding support.</p>
        <a className="cta" href="/#join-guide">
          Become a Guide
        </a>
      </section>

      <footer className="footer" aria-label="Footer">
        <Link href="/tours">Browse Tours by City</Link>
        <span className="footerNote">GuideAtlas</span>
      </footer>
    </main>
  );
}
