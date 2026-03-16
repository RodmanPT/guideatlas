import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import DestinationCard from "../../components/DestinationCard";
import EmptyState from "../../components/EmptyState";
import TourCard from "../../components/TourCard";
import { CITIES, getCityBySlug } from "../../data/cities";
import { getCityToursUrl } from "../../lib/url";
import { getAiToursByCity } from "../../data/aiTours";
import { getCitySeoIntro } from "../../data/citySeoIntros";
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

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getRandomCityLinks(currentCitySlug: string, min = 4, max = 6) {
  const candidates = CITIES.filter((city) => city.slug !== currentCitySlug);
  if (candidates.length === 0) return [];

  const seed = hashString(currentCitySlug);
  const count = Math.min(candidates.length, min + (seed % (max - min + 1)));

  const sorted = [...candidates].sort((a, b) => {
    const aWeight = hashString(`${currentCitySlug}-${a.slug}`);
    const bWeight = hashString(`${currentCitySlug}-${b.slug}`);
    return aWeight - bWeight;
  });

  return sorted.slice(0, count);
}

function getBaseUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.DEPLOY_PRIME_URL ||
    process.env.URL ||
    "http://localhost:3000";

  const trimmed = raw.trim().replace(/\/$/, "");
  if (!/^https?:\/\//i.test(trimmed)) return `https://${trimmed}`;
  return trimmed;
}

function getCountryFlagEmoji(country: string): string | null {
  const flagsByCountry: Record<string, string> = {
    Portugal: "🇵🇹",
    Spain: "🇪🇸",
    Italy: "🇮🇹",
    France: "🇫🇷",
    "United Kingdom": "🇬🇧",
    Japan: "🇯🇵",
    Thailand: "🇹🇭",
    "United States": "🇺🇸",
  };

  return flagsByCountry[country] ?? null;
}

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
    const countryFlag = getCountryFlagEmoji(city.country);
    const title = countryFlag
      ? `Best Tours in ${city.name} ${countryFlag} | GuideAtlas`
      : `Best Tours in ${city.name} | GuideAtlas`;
    const description = `Explore the best tours in ${city.name} with independent local guides. Walking tours, food tours and private experiences.`;
    const canonical = getCityToursUrl(city.slug);

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
  const baseUrl = getBaseUrl();

  const isCityToursPage = context.kind === "city";
  const cityToursBreadcrumbJsonLd =
    isCityToursPage && city
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: new URL("/", baseUrl).toString(),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Tours",
              item: new URL("/tours", baseUrl).toString(),
            },
            {
              "@type": "ListItem",
              position: 3,
              name: `${city.name} Tours`,
              item: new URL(getCityToursUrl(city.slug), baseUrl).toString(),
            },
          ],
        }
      : null;
  const cityTouristDestinationJsonLd =
    isCityToursPage && city
      ? {
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: city.name,
          description: `Discover authentic tours in ${city.name} led by independent local guides.`,
          url: new URL(getCityToursUrl(city.slug), baseUrl).toString(),
          address: {
            "@type": "PostalAddress",
            addressCountry: city.country,
          },
        }
      : null;
  const cityFaqs =
    isCityToursPage && city
      ? [
          {
            question: `What types of tours are available in ${city.name}?`,
            answer: `${city.name} usually offers walking tours, food tours, historical tours, and private experiences led by local guides.`,
          },
          {
            question: `Do I need to book tours in advance in ${city.name}?`,
            answer: `Booking in advance is recommended, especially during weekends and peak travel months, so you can secure your preferred time and guide.`,
          },
          {
            question: `Are private tours available in ${city.name}?`,
            answer: `Yes. Many guides offer private tours with flexible itineraries, which are ideal for couples, families, or small groups.`,
          },
        ]
      : null;
  const cityFaqJsonLd =
    isCityToursPage && cityFaqs
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: cityFaqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;
  const cityIntro =
    isCityToursPage && city
      ? getCitySeoIntro(city.slug, city.name)
      : null;
  const aiSuggestedTours = isCityToursPage && city ? getAiToursByCity(city.slug) : [];
  const relatedCities = isCityToursPage && city ? getRandomCityLinks(city.slug) : [];

  return (
    <main className="pageMain">
      {isCityToursPage && city ? (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="sep" aria-hidden="true">
              →
            </li>
            <li>
              <Link href="/tours">Tours</Link>
            </li>
            <li className="sep" aria-hidden="true">
              →
            </li>
            <li aria-current="page">
              <span>{city.name} Tours</span>
            </li>
          </ol>
        </nav>
      ) : null}

      {cityToursBreadcrumbJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cityToursBreadcrumbJsonLd) }}
        />
      ) : null}

      {cityTouristDestinationJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cityTouristDestinationJsonLd) }}
        />
      ) : null}

      {cityFaqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityFaqJsonLd) }} />
      ) : null}

      <section className="hero heroCompact">
        {context.kind === "city" ? <h1>Discover the Best Tours in {city!.name}</h1> : null}
        {context.kind === "tourType" ? <h1>Discover the Best {tourType!.name}</h1> : null}
        {context.kind === "cityTourType" ? (
          <h1>
            Discover the Best {tourType!.name} in {city!.name}
          </h1>
        ) : null}
        <p>
          {context.kind === "city" ? <>Explore {city!.name} with independent local guides.</> : null}
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

      {cityIntro ? (
        <section className="card section" aria-label={`Introduction to tours in ${city!.name}`}>
          <h2>Why explore {city!.name} with a local guide?</h2>
          <p>{cityIntro}</p>
        </section>
      ) : null}

      {isCityToursPage && aiSuggestedTours.length > 0 ? (
        <section className="section" aria-label={`Suggested tours in ${city!.name}`}>
          <h2>Suggested Tours in {city!.name}</h2>
          <div className="aiTourGrid">
            {aiSuggestedTours.map((tour) => (
              <TourCard
                key={tour.title}
                badge="AI Curated"
                title={tour.title}
                duration={tour.duration}
                guideLabel="Local Guide"
                description={tour.description}
                href={`/become-guide?city=${encodeURIComponent(city!.name)}&tour=${encodeURIComponent(tour.title)}`}
                actionLabel="Claim this tour"
              />
            ))}
          </div>
        </section>
      ) : null}

      {isCityToursPage && aiSuggestedTours.length === 0 ? (
        <EmptyState
          title="No tours yet in this city"
          text="We're inviting local guides to publish their first experiences here."
          actionHref={`/become-guide?city=${encodeURIComponent(city!.name)}`}
          actionLabel="Become the first guide"
        />
      ) : null}

      {context.kind === "tourType" ? (
        <section className="grid section" aria-label={`Cities offering ${tourType!.name.toLowerCase()}`}>
          {CITIES.map((c) => (
            <Link key={c.slug} className="card cardLink" href={tourTypeCityPath(tourType!.slug, c.slug)}>
              <h2>{tourType!.name} in {c.name}</h2>
              <p>{c.country}</p>
            </Link>
          ))}
        </section>
      ) : (
        <section className="grid section" id="types" aria-label={`Tour types in ${city!.name}`}>
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

      {isCityToursPage && cityFaqs ? (
        <section className="ctaPanel section" aria-label={`Frequently asked questions about tours in ${city!.name}`}>
          <h2>Frequently Asked Questions</h2>
          {cityFaqs.map((item) => (
            <article key={item.question} className="card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </section>
      ) : null}

      {context.kind !== "tourType" ? (
        <section className="ctaPanel section" aria-label={`Traveler call to action for ${city!.name}`}>
          <h2>Looking for a local guide in {city!.name}?</h2>
          <p>We are building the best way to discover authentic experiences led by independent guides.</p>
          <a className="cta" href="#types">
            Browse Tours
          </a>
        </section>
      ) : (
        <section className="ctaPanel section" aria-label="Traveler call to action">
          <h2>Looking for a local guide?</h2>
          <p>Browse destinations and discover authentic experiences led by independent local experts.</p>
          <Link className="cta" href="/tours">
            Browse Tours
          </Link>
        </section>
      )}

      {context.kind !== "tourType" ? (
        <section className="ctaPanel section" aria-label={`Guide call to action for ${city!.name}`}>
          <h2>Are you a guide in {city!.name}?</h2>
          <p>Join the founding guide network and get early onboarding support.</p>
          <a className="cta" href="/#join-guide">
            Become a Guide
          </a>
        </section>
      ) : (
        <section className="ctaPanel section" aria-label="Guide call to action">
          <h2>Are you a guide?</h2>
          <p>Join the founding guide network and get early onboarding support.</p>
          <a className="cta" href="/#join-guide">
            Become a Guide
          </a>
        </section>
      )}

      {isCityToursPage && relatedCities.length > 0 ? (
        <section className="section" aria-label={`Explore tours in other cities from ${city!.name}`}>
          <h2>Explore tours in other cities</h2>
          <div className="destinationGrid">
            {relatedCities.map((relatedCity) => (
              <DestinationCard
                key={relatedCity.slug}
                href={getCityToursUrl(relatedCity.slug)}
                citySlug={relatedCity.slug}
                cityName={relatedCity.name}
                country={relatedCity.country}
              />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
