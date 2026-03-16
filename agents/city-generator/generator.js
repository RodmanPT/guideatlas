function getSeededIndex(seed, mod) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % mod;
}

function getSeoIntro(cityName) {
  return `Discover the best tours in ${cityName}, from food walks to historical explorations led by local guides.`;
}

function generateTours(cityName, citySlug) {
  const templates = [
    {
      title: `${cityName} Food and Markets Walk`,
      duration: "3 hours",
      description: `Discover local flavors and market culture in ${cityName} with curated tasting stops.`,
    },
    {
      title: `Hidden Corners of ${cityName}`,
      duration: "2.5 hours",
      description: `Explore lesser-known neighborhoods and stories that show the local side of ${cityName}.`,
    },
    {
      title: `${cityName} History Highlights`,
      duration: "2 hours",
      description: `Walk through key landmarks and historical moments that shaped ${cityName}.`,
    },
    {
      title: `${cityName} Sunset Viewpoints`,
      duration: "2 hours",
      description: `Visit scenic viewpoints and photogenic routes around ${cityName} at golden hour.`,
    },
    {
      title: `${cityName} Culture and Street Life`,
      duration: "3.5 hours",
      description: `Experience neighborhood rhythms, architecture, and local culture in ${cityName}.`,
    },
    {
      title: `${cityName} Private Discovery Route`,
      duration: "3 hours",
      description: `A curated route through signature areas and hidden gems in ${cityName}.`,
    },
  ];

  const start = getSeededIndex(citySlug, templates.length);
  const count = 3 + (getSeededIndex(`${citySlug}-count`, 3)); // 3..5
  const tours = [];

  for (let i = 0; i < count; i += 1) {
    tours.push(templates[(start + i) % templates.length]);
  }

  return tours;
}

module.exports = {
  generateTours,
  getSeoIntro,
};

