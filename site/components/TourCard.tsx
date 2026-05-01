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
  imageSrc?: string;
  priority?: boolean;
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
  imageSrc,
  priority,
}: TourCardProps) {
  return (
    <article className="tourCard">
      <div className="tourCardMedia" aria-hidden="true">
        <Image
          src={imageSrc ?? "/images/tour-placeholder.svg"}
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="tourCardImage"
          priority={priority}
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
