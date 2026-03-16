import Image from "next/image";

type Props = {
  title: string;
  duration: string;
  subtitle: string;
  imageUrl: string;
};

export default function GuideTourCard({ title, duration, subtitle, imageUrl }: Props) {
  return (
    <article className="guideTourCard card">
      <div className="guideTourImageWrap" aria-hidden="true">
        <Image
          src={imageUrl}
          alt=""
          fill
          className="guideTourImage"
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="guideTourBody">
        <p className="tourCardBadge">Demo Tour</p>
        <h3>{title}</h3>
        <p className="guideTourMeta">Duration: {duration}</p>
        <p className="guideTourSubtitle">{subtitle}</p>
      </div>
    </article>
  );
}
