import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CITIES, cityToursPath, getCityBySlug } from "../../data/cities";
import { TOUR_TYPES, getTourTypeBySlug, tourTypeCityPath, tourTypePath } from "../../data/tourTypes";

type PageProps = {
  params: { slug?: string };
};

const TOURS_SUFFIX = "-tours";
const TOURS_CITY_SEPARATOR = "-tours-";

type SeoContext =
  | { kind: "city"; citySlug: string }
  | { kind: "tourType"; tourTypeSlug: string }
  | { kind: "cityTourType"; citySlug: string; tourTypeSlug: string };

function parseSeoSlug(slug: unknown): SeoContext | null {
  if (typeof slug !== "string") return null;
  const normalized = slug.trim().toLowerCase();
  if (!normalized) return null;

  if (normalized.includes(TOURS_CITY_SEPARATOR)) {
    const idx = normalized.indexOf(TOURS_CITY_SEPARATOR);
    const tourTypeSlug = normalized.slice(0, idx);
    const citySlug = normalized.slice(idx + TOURS_CITY_SEPARATOR.length);
    if (!tourTypeSlug || !citySlug) return null;

    if (!getTourTypeBySlug(tourTypeSlug)) return null;
    if (!getCityBySlug(citySlug)) return null;

    return { kind: "cityTourType", tourTypeSlug, citySlug };
  }

  if (!normalized.endsWith(TOURS_SUFFIX)) return null;
  const head = normalized.slice(0, -TOURS_SUFFIX.length);
  if (!head) return null;

  if (getCityBySlug(head)) return { kind: "city", citySlug: head };
  if (getTourTypeBySlug(head)) return { kind: "tourType", tourTypeSlug: head };

  return null;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const cityPages = CITIES.map((city) => ({ slug: `${city.slug}${TOURS_SUFFIX}` }));
  const tourTypePages = TOUR_TYPES.map((tourType) => ({ slug: `${tourType.slug}${TOURS_SUFFIX}` }));
  const cityTourTypePages = TOUR_TYPES.flatMap((tourType) =>
    CITIES.map((city) => ({ slug: `${tourType.slug}${TOURS_SUFFIX}-${city.slug}` })),
  );

  return [...cityPages, ...tourTypePages, ...cityTourTypePages];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const context = parseSeoSlug(params.slug);

  if (!context) {
    return {
      title: "Tours | GuideAtlas",
      description: "Discover authentic tours led by independent local guides.",
      robots: { index: false, follow: false },
    };
  }

  if (context.kind === "city") {
    const city = getCityBySlug(context.citySlug)!;
    const title = `Discover the Best Tours in ${city.name} | GuideAtlas`;
    const description = `Discover authentic tours in ${city.name} led by independent local guides.`;
    const canonical = cityToursPath(city.slug);

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: { title, description, type: "website" },
    };
  }

  if (context.kind === "tourType") {
    const tourType = getTourTypeBySlug(context.tourTypeSlug)!;
    const title = `Discover the Best ${tourType.name} | GuideAtlas`;
    const description = `Discover authentic ${tourType.name.toLowerCase()} led by independent local guides.`;
    const canonical = tourTypePath(tourType.slug);

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: { title, description, type: "website" },
    };
  }

  const city = getCityBySlug(context.citySlug)!;
  const tourType = getTourTypeBySlug(context.tourTypeSlug)!;
  const title = `Discover the Best ${tourType.name} in ${city.name} | GuideAtlas`;
  const description = `Discover authentic ${tourType.name.toLowerCase()} in ${city.name} led by independent local guides.`;
  const canonical = tourTypeCityPath(tourType.slug, city.slug);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, type: "website" },
  };
}

export default function CityToursPage({ params }: PageProps) {
  const context = parseSeoSlug(params.slug);
  if (!context) {
    notFound();
  }

  const city = context.kind !== "tourType" ? getCityBySlug(context.citySlug)! : null;
  const tourType = context.kind !== "city" ? getTourTypeBySlug(context.tourTypeSlug)! : null;

  return (
    <main>
      <section className="hero">
        {context.kind === "city" ? <h1>Discover the Best Tours in {city!.name}</h1> : null}
        {context.kind === "tourType" ? <h1>Discover the Best {tourType!.name}</h1> : null}
        {context.kind === "cityTourType" ? (
          <h1>
            Discover the Best {tourType!.name} in {city!.name}
          </h1>
        ) : null}
        <p>
          {context.kind === "city" ? (
            <>
              Explore {city!.name} with independent local guides. Find experiences tailored to your pace and
              interests.
            </>
          ) : null}
          {context.kind === "tourType" ? (
            <>
              Explore {tourType!.name.toLowerCase()} with independent local guides in top destinations around
              the world.
            </>
          ) : null}
          {context.kind === "cityTourType" ? (
            <>
              Explore {city!.name} with independent local guides. Find {tourType!.name.toLowerCase()} and
              other experiences tailored to your pace.
            </>
          ) : null}
        </p>
      </section>

      {context.kind === "tourType" ? (
        <section className="grid" aria-label={`Cities offering ${tourType!.name.toLowerCase()}`}>
          {CITIES.map((c) => (
            <Link key={c.slug} className="card cardLink" href={tourTypeCityPath(tourType!.slug, c.slug)}>
              <h2>{tourType!.name} in {c.name}</h2>
              <p>{c.country}</p>
            </Link>
          ))}
        </section>
      ) : (
        <section className="grid" id="types" aria-label={`Tour types in ${city!.name}`}>
          {TOUR_TYPES.map((t) => {
            const href =
              context.kind === "cityTourType" && t.slug === tourType!.slug
                ? undefined
                : tourTypeCityPath(t.slug, city!.slug);

            const title = `${t.name} in ${city!.name}`;
            const isActive = context.kind === "cityTourType" && t.slug === tourType!.slug;

            return href ? (
              <Link key={t.slug} className="card cardLink" href={href} aria-current={isActive ? "page" : undefined}>
                <h2>{t.name}</h2>
                <p>{title}</p>
              </Link>
            ) : (
              <article key={t.slug} className="card" aria-current="page">
                <h2>{t.name}</h2>
                <p>{title}</p>
              </article>
            );
          })}
        </section>
      )}

      {context.kind !== "tourType" ? (
        <section className="ctaPanel" aria-label={`Traveler call to action for ${city!.name}`}>
          <h2>Looking for a local guide in {city!.name}?</h2>
          <p>We are building the best way to discover authentic experiences led by independent guides.</p>
          <a className="cta" href="#types">
            Browse Tours
          </a>
        </section>
      ) : (
        <section className="ctaPanel" aria-label="Traveler call to action">
          <h2>Looking for a local guide?</h2>
          <p>Browse destinations and discover authentic experiences led by independent local experts.</p>
          <Link className="cta" href="/tours">
            Browse Tours
          </Link>
        </section>
      )}

      {context.kind !== "tourType" ? (
        <section className="ctaPanel" aria-label={`Guide call to action for ${city!.name}`}>
          <h2>Are you a guide in {city!.name}?</h2>
          <p>Join the founding guide network and get early onboarding support.</p>
          <a className="cta" href="/#join-guide">
            Become a Guide
          </a>
        </section>
      ) : (
        <section className="ctaPanel" aria-label="Guide call to action">
          <h2>Are you a guide?</h2>
          <p>Join the founding guide network and get early onboarding support.</p>
          <a className="cta" href="/#join-guide">
            Become a Guide
          </a>
        </section>
      )}

      <footer className="footer" aria-label="Footer">
        <Link href="/tours">Browse Tours by City</Link>
        <span className="footerNote">GuideAtlas</span>
      </footer>
    </main>
  );
}
