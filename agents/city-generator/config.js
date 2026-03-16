const DAILY_INTERVAL_MS = 24 * 60 * 60 * 1000;

const candidateDestinations = [
  {
    slug: "berlin",
    name: "Berlin",
    country: "Germany",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    slug: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    latitude: 52.3676,
    longitude: 4.9041,
  },
  {
    slug: "vienna",
    name: "Vienna",
    country: "Austria",
    latitude: 48.2082,
    longitude: 16.3738,
  },
  {
    slug: "prague",
    name: "Prague",
    country: "Czech Republic",
    latitude: 50.0755,
    longitude: 14.4378,
  },
  {
    slug: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    latitude: 41.0082,
    longitude: 28.9784,
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    latitude: 25.2048,
    longitude: 55.2708,
  },
  {
    slug: "mexico-city",
    name: "Mexico City",
    country: "Mexico",
    latitude: 19.4326,
    longitude: -99.1332,
  },
  {
    slug: "sydney",
    name: "Sydney",
    country: "Australia",
    latitude: -33.8688,
    longitude: 151.2093,
  },
];

module.exports = {
  DAILY_INTERVAL_MS,
  candidateDestinations,
};

