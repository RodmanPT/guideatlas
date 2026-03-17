"use client";

import { FormEvent, useState } from "react";
import { CITIES } from "../data/cities";

const OTHER_OPTION = "__other__";
const COUNTRY_OPTIONS = Array.from(new Set(CITIES.map((city) => city.country))).sort();
const TOUR_TYPE_SUGGESTIONS = ["Food Tour", "Walking Tour", "History Tour", "Night Tour", "Private Tour"];

type FormState = {
  name: string;
  email: string;
  city: string;
  country: string;
  customCity: string;
  customCountry: string;
  tourType: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  city: "",
  country: "",
  customCity: "",
  customCountry: "",
  tourType: "",
};

export default function GuideSignupForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setIsError(false);

    const cleanedCountry =
      form.country === OTHER_OPTION ? form.customCountry.trim() : form.country.trim();
    const cleanedCity =
      form.country === OTHER_OPTION || form.city === OTHER_OPTION ? form.customCity.trim() : form.city.trim();

    const cleaned = {
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      city: cleanedCity,
      country: cleanedCountry,
      tourType: form.tourType.trim(),
    };

    if (!cleaned.name || !cleaned.email || !cleaned.city || !cleaned.country || !cleaned.tourType) {
      setIsError(true);
      setMessage("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(cleaned.email)) {
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
          name: cleaned.name,
          email: cleaned.email,
          city: cleaned.city,
          country: cleaned.country,
          tour_type: cleaned.tourType,
        }),
      });

      if (response.status === 409) {
        setIsError(true);
        setMessage("You are already on the waitlist.");
        return;
      }

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setIsError(true);
        setMessage(data?.error ? String(data.error) : "Something went wrong. Please try again.");
        return;
      }

      setMessage("Thank you for joining GuideAtlas. We will contact you soon.");
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setIsError(true);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const cityOptions = form.country && form.country !== OTHER_OPTION
    ? CITIES.filter((item) => item.country === form.country).map((item) => item.name)
    : [];

  const showCustomCountry = form.country === OTHER_OPTION;
  const showCustomCity = form.country === OTHER_OPTION || form.city === OTHER_OPTION;

  return (
    <section className="signup" id="join-guide" aria-label="Become a founding guide">
      <h2>Become a founding guide</h2>
      <p>Tell us where you guide and what tour you offer. We will invite you when GuideAtlas launches there.</p>

      <form className="signupForm" onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            required
          />
        </label>

        <label>
          Country
          <select
            value={form.country}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                country: event.target.value,
                city: "",
                customCity: "",
                customCountry: event.target.value === OTHER_OPTION ? prev.customCountry : "",
              }))
            }
            required
          >
            <option value="">Select a country</option>
            {COUNTRY_OPTIONS.map((country) => (
              <option key={country} value={country}>
                {country}
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
              value={form.customCountry}
              onChange={(event) => setForm((prev) => ({ ...prev, customCountry: event.target.value }))}
              required
            />
          </label>
        ) : null}

        <label>
          City
          {showCustomCity ? (
            <input
              type="text"
              value={form.customCity}
              onChange={(event) => setForm((prev) => ({ ...prev, customCity: event.target.value }))}
              required
            />
          ) : (
            <select
              value={form.city}
              onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
              required
              disabled={!form.country}
            >
              <option value="">{form.country ? "Select a city" : "Select a country first"}</option>
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
              <option value={OTHER_OPTION}>Other</option>
            </select>
          )}
        </label>

        <label>
          Tour Type
          <input
            type="text"
            value={form.tourType}
            onChange={(event) => setForm((prev) => ({ ...prev, tourType: event.target.value }))}
            list="guide-tour-type-options"
            placeholder="Food tour, walking tour, history..."
            required
          />
        </label>
        <datalist id="guide-tour-type-options">
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
