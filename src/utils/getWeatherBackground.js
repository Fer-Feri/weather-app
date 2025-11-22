import sunBg from "../images/weather-bg/sun.png";
import sunCloudBg from "../images/weather-bg/sunCloud.png";
import rainBg from "../images/weather-bg/rain.png";
import snowBg from "../images/weather-bg/snow.png";
import thunderstormBg from "../images/weather-bg/thunderstorm.png";

export function getWeatherBackground(weatherCode) {
  if (weatherCode === 0) return sunBg; // آفتابی
  if (weatherCode <= 3) return sunCloudBg; // نیمه‌ابری / ابری

  if (weatherCode === 45 || weatherCode === 48) return sunCloudBg; // مه → میتونی تصویر جدا بذاری

  if (weatherCode >= 51 && weatherCode <= 55) return rainBg; // ریزش باران (drizzle)

  if (weatherCode >= 61 && weatherCode <= 67) return rainBg; // باران / freezing rain

  if (weatherCode >= 71 && weatherCode <= 77) return snowBg; // برف

  if (weatherCode >= 80 && weatherCode <= 82) return rainBg; // باران رگباری

  if (weatherCode >= 95) return thunderstormBg; // رعد و برق

  return sunBg; // پیش‌فرض
}
