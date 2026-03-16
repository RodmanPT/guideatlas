import Image from "next/image";
import Link from "next/link";

type TourCardProps = {
  title: string;
  duration: string;
  guideLabel?: string;
  groupLabel?: string;
  badge?: string;
  description?: string;
  href?: string;
  actionLabel?: string;
};

export default function TourCard({
  title,
  duration,
  guideLabel = "Local Guide",
  groupLabel = "Small group",
  badge,
  description,
  href,
  actionLabel,
}: TourCardProps) {
  return (
    <article className="tourCard">
      <div className="tourCardMedia" aria-hidden="true">
        <Image
          src="/images/tour-placeholder.svg"
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="tourCardImage"
        />
      </div>

      <div className="tourCardBody">
        {badge ? <p className="tourCardBadge">{badge}</p> : null}
        <h3>{title}</h3>
        <p className="tourCardMeta">
          {duration} • {groupLabel}
        </p>
        <p className="tourCardGuide">{guideLabel}</p>
        {description ? <p className="tourCardDescription">{description}</p> : null}
        {href && actionLabel ? (
          <Link className="tourCardAction" href={href}>
            {actionLabel}
          </Link>
        ) : null}
      </div>
    </article>
  );
}

