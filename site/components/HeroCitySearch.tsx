"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { CITIES } from "../data/cities";
import { getCityToursUrl } from "../lib/url";

function normalize(text: string): string {
  return text.trim().toLowerCase();
}

export default function HeroCitySearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const cityNames = useMemo(() => CITIES.map((city) => city.name), []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = normalize(query);
    if (!value) {
      router.push("/tours");
      return;
    }

    const exactMatch = CITIES.find((city) => normalize(city.name) === value);
    if (exactMatch) {
      router.push(getCityToursUrl(exactMatch.slug));
      return;
    }

    const partialMatch = CITIES.find((city) => normalize(city.name).includes(value));
    if (partialMatch) {
      router.push(getCityToursUrl(partialMatch.slug));
      return;
    }

    router.push("/tours");
  };

  return (
    <form className="homeHeroSearch" onSubmit={onSubmit} role="search" aria-label="City search">
      <label htmlFor="hero-city-search">Where do you want to explore?</label>
      <div className="homeHeroSearchRow">
        <input
          id="hero-city-search"
          name="city"
          type="search"
          value={query}
          list="guideatlas-city-options"
          placeholder="Where do you want to explore?"
          aria-label="Where do you want to explore?"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </div>
      <datalist id="guideatlas-city-options">
        {cityNames.map((cityName) => (
          <option key={cityName} value={cityName} />
        ))}
      </datalist>
    </form>
  );
}

