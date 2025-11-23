import { getWeatherIcon } from "../utils/getWeatherIcon";
import { getWeatherText } from "../utils/getWeatherText";

const CityList = ({ nearCities }) => {
  return (
    <div className="row-span-6 flex flex-col gap-3 rounded-2xl">
      {nearCities?.map((city, index) => (
        <div
          key={index}
          className="flex items-center justify-between rounded-xl bg-slate-900/70 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-slate-900/80 md:p-5"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/50 p-2 md:h-14 md:w-14">
              <img
                src={getWeatherIcon(
                  city?.weather?.current_weather?.weathercode,
                )}
                alt="Rain"
                className="h-full w-full object-contain opacity-90"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white md:text-base">
                {city.city}
              </p>
              <p className="text-[10px] text-slate-400 md:text-sm">
                {getWeatherText(city?.weather?.current_weather?.weathercode)}
              </p>
            </div>
          </div>
          <p className="text-xs font-semibold text-white md:text-base">
            {city.weather?.daily?.temperature_2m_max?.[0]}°C /
            {city.weather?.daily?.temperature_2m_min?.[0]}°C
          </p>
        </div>
      ))}
    </div>
  );
};

export default CityList;
