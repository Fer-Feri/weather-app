import { Icons } from "../images/Icons";
import { getWeatherBackground } from "../utils/getWeatherBackground";
import { getWeatherIcon } from "../utils/getWeatherIcon";

const WeatherNowCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { coords, weather } = weatherData;
  const { name, country } = coords;
  const { current_weather } = weather;

  const windSpeed = current_weather.windspeed;
  const temperature = Math.round(current_weather.temperature);
  const weatherCode = current_weather.weathercode;

  const feelsLike = Math.round(temperature - windSpeed * 0.3);

  const weatherIcon = getWeatherIcon(weatherCode);
  const weatherBackground = getWeatherBackground(weatherCode);

  return (
    <section
      className="weather-now-card"
      style={{ backgroundImage: `url(${weatherBackground})` }}
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-slate-900/85 backdrop-blur-sm"></div>

      {/* Content - با z-index بالاتر */}
      <div className="relative z-10 flex h-full flex-col justify-between lg:flex-row">
        {/* weather now card LEFT */}
        <div className="flex flex-col justify-between">
          {/* badge */}
          <div className="flex w-fit items-center gap-2 rounded-full bg-slate-800/50 px-4 py-2 backdrop-blur-sm">
            <Icons.MapPin className="h-4 w-4 text-orange-400" />
            <p className="text-sm font-medium text-white">
              {name}, {country}
            </p>
          </div>

          {/* title */}
          <div className="my-6">
            <h2 className="font-head mb-2 text-4xl font-bold text-white md:text-5xl">
              Weather
            </h2>
            <p className="text-base text-slate-300 md:text-lg">Now</p>
          </div>

          {/* Temperature */}
          <div className="flex flex-col gap-2">
            <p className="font-head text-7xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] md:text-8xl">
              {temperature}°C
            </p>
            <span className="text-sm text-slate-400 md:text-base">
              Feels like {feelsLike}°C
            </span>
          </div>
        </div>

        {/* weather now card RIGHT */}
        <div className="flex flex-col items-end justify-between">
          {/* svg icon */}
          <div className="flex w-32 items-center justify-center md:w-40">
            <img
              src={weatherIcon}
              alt="Weather Icon"
              className="w-full animate-[float_6s_ease-in-out_infinite] !cursor-default drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
          </div>

          {/* boxes */}
          <div className="mt-6 flex gap-3 md:gap-4">
            {/* Visibility */}
            <div className="flex min-w-[90px] flex-col items-center gap-1 rounded-xl bg-slate-800/50 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70 md:min-w-[100px]">
              <p className="text-xs text-slate-400 md:text-sm">Visibility</p>
              <span className="text-lg font-bold text-white md:text-xl">
                {windSpeed}km
              </span>
            </div>

            {/* Humidity */}
            <div className="flex min-w-[90px] flex-col items-center gap-1 rounded-xl bg-slate-800/50 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70 md:min-w-[100px]">
              <p className="text-xs text-slate-400 md:text-sm">Humidity</p>
              <span className="text-lg font-bold text-white md:text-xl">
                {weather.hourly?.relativehumidity_2m?.[0] || "--"}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherNowCard;
