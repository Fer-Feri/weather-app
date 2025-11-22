export function getWeatherText(weatherCode) {
  if (weatherCode === 0) return "Sunny";
  if ([1, 2, 3].includes(weatherCode)) return "Partly Cloudy";

  if (
    (weatherCode >= 51 && weatherCode <= 67) ||
    (weatherCode >= 80 && weatherCode <= 82)
  )
    return "Rainy";

  if (weatherCode >= 71 && weatherCode <= 77) return "Snowy";

  if (weatherCode >= 95 && weatherCode <= 99) return "Thunderstorm";

  return "Cloudy";
}
