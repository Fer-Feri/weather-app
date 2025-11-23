import { getBgTomorrow } from "../utils/getBgTomorrow";
import { getWeatherText } from "../utils/getWeatherText";

const TomorrowCard = ({ weatherData, cityName }) => {
  if (!weatherData?.weather?.daily) return null;

  const tomorrowIndex = 1;
  const daily = weatherData.weather.daily;

  const tomorrowTemp = Math.round(
    (daily.temperature_2m_max[tomorrowIndex] +
      daily.temperature_2m_min[tomorrowIndex]) /
      2,
  );

  const weatherCode = daily.weathercode
    ? daily.weathercode[tomorrowIndex]
    : weatherData.weather.current_weather.weathercode;

  return (
    <div className="relative col-span-12 row-span-6 flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl p-5 md:col-span-4 md:min-h-[320px]">
      {/* Image layer */}
      <img
        src={getBgTomorrow(weatherCode)}
        alt="tomorrow weather"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/70" />

      {/* Content layer */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* Top info */}
        <div className="w-fit rounded-lg bg-slate-900/50 px-3 py-2 backdrop-blur-sm">
          <p className="text-xs tracking-wide text-slate-300 opacity-90">
            Tomorrow
          </p>
          <h3 className="text-lg font-semibold text-white md:text-xl">
            {cityName}
          </h3>
        </div>

        {/* Bottom info */}
        <div className="w-fit rounded-lg bg-slate-900/50 px-3 py-2 backdrop-blur-sm">
          <p className="text-3xl font-bold text-white">{tomorrowTemp}°C</p>
          <p className="text-sm tracking-wide text-slate-300">
            {getWeatherText(weatherCode)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TomorrowCard;
