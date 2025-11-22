import sunIcon from "../images/weather-icon/sun.png";
import sunCloudIcon from "../images/weather-icon/sun-cloud.png";
import rainIcon from "../images/weather-icon/rain.png";
import snowIcon from "../images/weather-icon/snow.png";
import thunderIcon from "../images/weather-icon/storm.png";

export function getWeatherIcon(weatherCode) {
  if (weatherCode === 0) return sunIcon;

  if ([1, 2, 3].includes(weatherCode)) return sunCloudIcon;

  if (
    (weatherCode >= 51 && weatherCode <= 67) ||
    (weatherCode >= 80 && weatherCode <= 82)
  )
    return rainIcon;

  if (weatherCode >= 71 && weatherCode <= 77) return snowIcon;

  if (weatherCode >= 95 && weatherCode <= 99) return thunderIcon;

  return sunCloudIcon;
}
