import Image from "next/image";

type Props = {
  name: string;
  title: string;
  photoUrl: string;
  rating: number;
  travelersHosted: number;
  languages: string[];
  yearsGuiding: number;
};

export default function GuideProfileHeader({
  name,
  title,
  photoUrl,
  rating,
  travelersHosted,
  languages,
  yearsGuiding,
}: Props) {
  return (
    <section className="guideProfileHeader card" aria-label={`${name} profile header`}>
      <div className="guideProfilePhotoWrap">
        <Image
          src={photoUrl}
          alt={`${name} profile photo`}
          width={220}
          height={220}
          className="guideProfilePhoto"
          sizes="(max-width: 760px) 160px, 220px"
          priority
        />
      </div>

      <div className="guideProfileMeta">
        <h1>{name}</h1>
        <p className="guideProfileTitle">{title}</p>

        <div className="guideProfileStats">
          <span>⭐ {rating.toFixed(1)} rating</span>
          <span>{travelersHosted} travelers hosted</span>
        </div>

        <div className="guideProfileBadges">
          <span className="guidePill">Local Expert</span>
          <span className="guidePill">Languages: {languages.join(" • ")}</span>
          <span className="guidePill">{yearsGuiding} years guiding</span>
        </div>
      </div>
    </section>
  );
}

