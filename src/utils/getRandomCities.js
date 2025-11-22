export function getRandomCities(cities, count = 3) {
  const shuffleCities = [...cities].sort(() => Math.random() - 0.5);
  return shuffleCities.slice(0, count);
}
