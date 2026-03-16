import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import TourCard from "../../../components/TourCard";
import { getCityImageUrl } from "../../../data/cityImages";
import { findGuideBySlug, listToursByCity } from "../../../lib/googleSheets";
import { getCityToursUrl } from "../../../lib/url";
import { toSlug } from "../../../../shared/utils/helpers";

type PageProps = {
  params: {
    slug?: string;
  };
};

function cleanSlug(value: string | undefined): string {
  return (value ?? "").trim().toLowerCase();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = cleanSlug(params.slug);
  if (!slug) {
    return {
      title: "Guide Profile | GuideAtlas",
      description: "Explore local guide profiles on GuideAtlas.",
      robots: { index: false, follow: false },
    };
  }

  const guide = await findGuideBySlug(slug);
  if (!guide) {
    return {
      title: "Guide Not Found | GuideAtlas",
      description: "This guide profile is not available.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${guide.name} in ${guide.city} | GuideAtlas`;
  const description = `Discover tours and local insights from ${guide.name}, independent guide in ${guide.city}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
    },
  };
}

export default async function GuideProfilePage({ params }: PageProps) {
  const slug = cleanSlug(params.slug);
  if (!slug) notFound();

  const guide = await findGuideBySlug(slug);
  if (!guide) notFound();

  const citySlug = toSlug(guide.city);
  const toursInCity = await listToursByCity(citySlug);
  const guideTours = toursInCity.filter((tour) => tour.guide_slug === guide.slug);

  return (
    <main className="pageMain">
      <section className="hero heroCompact">
        <p className="heroKicker">Guide Profile</p>
        <h1>{guide.name}</h1>
        <p>
          Local guide in {guide.city}
          {guide.country ? `, ${guide.country}` : ""}.
        </p>
      </section>

      <section className="card section">
        <h2>About</h2>
        <p>{guide.bio}</p>
        {guide.languages.length ? (
          <p>
            <strong>Languages:</strong> {guide.languages.join(", ")}
          </p>
        ) : null}
        {typeof guide.rating === "number" ? (
          <p>
            <strong>Rating:</strong> {guide.rating.toFixed(1)} / 5
          </p>
        ) : null}
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>{guide.name}'s tours</h2>
          <p>
            {guideTours.length
              ? `Published tours available in ${guide.city}.`
              : `No tours published yet in ${guide.city}.`}
          </p>
        </div>
        {guideTours.length ? (
          <div className="tourGrid">
            {guideTours.map((tour) => (
              <TourCard
                key={tour.id}
                badge="Guide Tour"
                title={tour.title}
                duration={tour.duration}
                guideLabel={guide.name}
                groupLabel={tour.price}
                description={`${tour.description} Meeting point: ${tour.meeting_point}.`}
                imageSrc={getCityImageUrl(citySlug)}
              />
            ))}
          </div>
        ) : (
          <div className="emptyState">
            <div className="emptyStateIllustration" aria-hidden="true" />
            <h2>No tours published yet</h2>
            <p>{guide.name} is preparing upcoming experiences for travelers.</p>
            <Link
              className="cta"
              href={`/tours/new?guide=${encodeURIComponent(guide.slug)}&city=${encodeURIComponent(guide.city)}`}
            >
              Publish first tour
            </Link>
          </div>
        )}
      </section>

      <section className="ctaPanel section">
        <h2>Explore more in {guide.city}</h2>
        <p>Browse city tours and discover more local experiences.</p>
        <Link className="cta" href={getCityToursUrl(citySlug)}>
          View {guide.city} tours
        </Link>
      </section>
    </main>
  );
}

