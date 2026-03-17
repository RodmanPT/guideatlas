"use client";

import { FormEvent, useState } from "react";
import { CITIES } from "../data/cities";

const OTHER_OPTION = "__other__";
const COUNTRY_OPTIONS = Array.from(new Set(CITIES.map((city) => city.country))).sort();
const TOUR_TYPE_SUGGESTIONS = ["Food Tour", "Walking Tour", "History Tour", "Night Tour", "Private Tour"];

type Props = {
  initialCity: string;
  initialCountry: string;
  initialTour: string;
};

export default function BecomeGuideForm({ initialCity, initialCountry, initialTour }: Props) {
  const hasKnownInitialCountry = COUNTRY_OPTIONS.includes(initialCountry);
  const initialCountryValue = hasKnownInitialCountry ? initialCountry : initialCountry ? OTHER_OPTION : "";
  const initialCustomCountry = hasKnownInitialCountry ? "" : initialCountry;

  const initialCityOptions = hasKnownInitialCountry
    ? CITIES.filter((item) => item.country === initialCountry).map((item) => item.name)
    : [];
  const hasKnownInitialCity = initialCityOptions.includes(initialCity);
  const initialCityValue = hasKnownInitialCity ? initialCity : initialCity ? OTHER_OPTION : "";
  const initialCustomCity = hasKnownInitialCity ? "" : initialCity;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState(initialCityValue);
  const [country, setCountry] = useState(initialCountryValue);
  const [customCity, setCustomCity] = useState(initialCustomCity);
  const [customCountry, setCustomCountry] = useState(initialCustomCountry);
  const [tour, setTour] = useState(initialTour);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setIsError(false);

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanCountry = country === OTHER_OPTION ? customCountry.trim() : country.trim();
    const cleanCity = country === OTHER_OPTION || city === OTHER_OPTION ? customCity.trim() : city.trim();
    const cleanTour = tour.trim();

    if (!cleanName || !cleanEmail || !cleanCity || !cleanCountry || !cleanTour) {
      setIsError(true);
      setMessage("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(cleanEmail)) {
      setIsError(true);
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/guide-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          city: cleanCity,
          country: cleanCountry,
          tour_type: cleanTour,
        }),
      });

      if (response.status === 409) {
        setIsError(true);
        setMessage("You are already on the waitlist.");
        return;
      }

      if (!response.ok) {
        setIsError(true);
        setMessage("Something went wrong. Please try again.");
        return;
      }

      setMessage("Thank you for joining GuideAtlas. We will contact you soon.");
      setName("");
      setEmail("");
    } catch (error) {
      console.error(error);
      setIsError(true);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const cityOptions = country && country !== OTHER_OPTION
    ? CITIES.filter((item) => item.country === country).map((item) => item.name)
    : [];

  const showCustomCountry = country === OTHER_OPTION;
  const showCustomCity = country === OTHER_OPTION || city === OTHER_OPTION;

  return (
    <section className="signup" aria-label="Become a guide">
      <h2>Become a Guide</h2>
      <p>Claim this curated route and become one of the first local experts on GuideAtlas.</p>
      <form className="signupForm" onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Country
          <select
            value={country}
            onChange={(event) => {
              setCountry(event.target.value);
              setCity("");
              setCustomCity("");
              if (event.target.value !== OTHER_OPTION) {
                setCustomCountry("");
              }
            }}
            required
          >
            <option value="">Select a country</option>
            {COUNTRY_OPTIONS.map((countryOption) => (
              <option key={countryOption} value={countryOption}>
                {countryOption}
              </option>
            ))}
            <option value={OTHER_OPTION}>Other</option>
          </select>
        </label>
        {showCustomCountry ? (
          <label>
            Country name
            <input
              type="text"
              value={customCountry}
              onChange={(event) => setCustomCountry(event.target.value)}
              required
            />
          </label>
        ) : null}
        <label>
          City
          {showCustomCity ? (
            <input
              type="text"
              value={customCity}
              onChange={(event) => setCustomCity(event.target.value)}
              required
            />
          ) : (
            <select
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required
              disabled={!country}
            >
              <option value="">{country ? "Select a city" : "Select a country first"}</option>
              {cityOptions.map((cityOption) => (
                <option key={cityOption} value={cityOption}>
                  {cityOption}
                </option>
              ))}
              <option value={OTHER_OPTION}>Other</option>
            </select>
          )}
        </label>
        {tour ? (
          <label>
            Tour Type
            <input
              type="text"
              value={tour}
              onChange={(event) => setTour(event.target.value)}
              list="become-guide-tour-type-options"
              required
            />
          </label>
        ) : (
          <label>
            Tour Type
            <input
              type="text"
              value={tour}
              onChange={(event) => setTour(event.target.value)}
              list="become-guide-tour-type-options"
              placeholder="Food tour, walking tour, history..."
              required
            />
          </label>
        )}
        <datalist id="become-guide-tour-type-options">
          {TOUR_TYPE_SUGGESTIONS.map((type) => (
            <option key={type} value={type} />
          ))}
        </datalist>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Join GuideAtlas"}
        </button>
      </form>
      {message ? (
        <p className={isError ? "signupMessage error" : "signupMessage success"}>{message}</p>
      ) : null}
    </section>
  );
}
