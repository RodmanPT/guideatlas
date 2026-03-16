type Props = {
  title: string;
  duration: string;
  subtitle: string;
};

export default function GuideTourCard({ title, duration, subtitle }: Props) {
  return (
    <article className="guideTourCard card">
      <p className="tourCardBadge">Demo Tour</p>
      <h3>{title}</h3>
      <p className="guideTourMeta">Duration: {duration}</p>
      <p className="guideTourSubtitle">{subtitle}</p>
    </article>
  );
}

