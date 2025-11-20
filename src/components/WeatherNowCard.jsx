import { Icons } from "../images/Icons";
// import SunCloudIcon from "../images/weather-icon/day-cloudy.svg?react";
import SunCloudIcon from "../images/weather-icon/sun-cloud.png";

const WeatherNowCard = () => {
  return (
    <section className="weather-now-card">
      {/* weather now card LEFT */}
      <div className="weather-now-card-left">
        {/* badge */}
        <div className="badge">
          <Icons.mapPin className="icons text-mint cursor-default" />
          <p className="text-gray-200">Iran, Sanandaj</p>
        </div>

        {/* title */}
        <div className="my-6">
          <h2 className="font-head mb-1 text-3xl text-gray-100">Weather</h2>
          <p className="text-sm text-gray-200">Now</p>
        </div>

        {/* Temperature */}
        <div className="Temperature">
          <p className="font-head text-7xl font-bold text-white drop-shadow-lg">
            25°C
          </p>
          <span className="text-sm text-gray-300">Feels like 26°C</span>
        </div>
      </div>

      {/* weather now card RIGHT */}
      <div className="weather-now-card-right">
        {/* svg icon */}
        <div className="flex">
          {/* <SunCloudIcon className="w-52 text-red-600" /> */}
          <img src={SunCloudIcon} alt="" className="w-36" />
        </div>
        {/* boxes */}
        <div className="mt-6 flex gap-4">
          {/* Visibility */}
          <div className="flex flex-col items-center rounded-lg bg-slate-800/40 p-3">
            <p className="text-sm text-gray-200">Visibility</p>
            <span className="text-lg font-medium text-white">10km</span>
          </div>
          {/* Humidity */}
          <div className="flex flex-col items-center rounded-lg bg-slate-800/40 p-3">
            <p className="text-sm text-gray-200">Humidity</p>
            <span className="text-lg font-medium text-white">62%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherNowCard;
