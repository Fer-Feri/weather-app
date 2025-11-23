import tomorrowSun from "../images/tomorrow/tomorrow-sun.png";
import tomorrowRain from "../images/tomorrow/tomorrow-rain.png";
import tomorrowSnow from "../images/tomorrow/tomorrow-snow.png";
import tomorrowSunCloud from "../images/tomorrow/tomorrow-suncloud.png";
import tomorrowStorm from "../images/tomorrow/tomorrow-storm.png";

export const getBgTomorrow = (code) => {
  const weatherCode = Number(code);

  if ([0, 1, 2].includes(weatherCode)) return tomorrowSun;
  if ([3, 45, 48].includes(weatherCode)) return tomorrowSunCloud;
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode))
    return tomorrowRain;
  if ([56, 57, 66, 67, 71, 73, 75, 77, 85, 86].includes(weatherCode))
    return tomorrowSnow;
  if ([95, 96, 99].includes(weatherCode)) return tomorrowStorm;

  return tomorrowSun;
};
