"use client";

import { FormEvent, useState } from "react";

type Props = {
  initialCity: string;
  initialTour: string;
};

export default function BecomeGuideForm({ initialCity, initialTour }: Props) {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState(initialCity);
  const [tour] = useState(initialTour);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setIsError(false);

    const cleanEmail = email.trim().toLowerCase();
    const cleanCity = city.trim();
    const cleanTour = tour.trim();

    if (!cleanEmail || !cleanCity) {
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
          email: cleanEmail,
          city: cleanCity,
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
      setEmail("");
    } catch (error) {
      console.error(error);
      setIsError(true);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="signup" aria-label="Become a guide">
      <h2>Become a Guide</h2>
      <p>Claim this curated route and become one of the first local experts on GuideAtlas.</p>
      <form className="signupForm" onSubmit={onSubmit}>
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
          City
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            required
          />
        </label>
        {tour ? (
          <label>
            Claimed tour
            <input type="text" value={tour} readOnly />
          </label>
        ) : null}
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

