import Image from "next/image";
import Link from "next/link";

type DestinationCardProps = {
  href: string;
  cityName: string;
  country: string;
  subtitle?: string;
};

export default function DestinationCard({ href, cityName, country, subtitle }: DestinationCardProps) {
  return (
    <Link className="destinationCard" href={href}>
      <div className="destinationCardMedia" aria-hidden="true">
        <Image
          src="/images/city-placeholder.svg"
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="destinationCardImage"
        />
      </div>
      <div className="destinationCardBody">
        <h3>{cityName}</h3>
        <p>{subtitle ?? "Local experiences"}</p>
        <span>{country}</span>
      </div>
    </Link>
  );
}

