import type { DemoGuideTour } from "../data/demoGuideProfile";
import GuideTourCard from "./GuideTourCard";

type Props = {
  tours: DemoGuideTour[];
};

export default function GuideToursGrid({ tours }: Props) {
  return (
    <section className="section" aria-label="Guide tours section">
      <div className="sectionHeader">
        <h2>Example Tours</h2>
        <p>Demo content to show how published tours can appear on a guide profile.</p>
      </div>
      <div className="guideToursGrid">
        {tours.map((tour, index) => (
          <GuideTourCard
            key={tour.id}
            title={tour.title}
            duration={tour.duration}
            subtitle={tour.subtitle}
            imageUrl={tour.imageUrl}
            priority={index < 4}
          />
        ))}
      </div>
    </section>
  );
}
