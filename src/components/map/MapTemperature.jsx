import MapWeather from "./MapWeather";

const MapTemperature = ({ weatherData }) => {
  if (!weatherData?.coords || !weatherData?.weather) return null;

  const { coords, weather } = weatherData;
  const weatherCode = weather?.current_weather?.weathercode;

  return (
    <div className="relative col-span-12 row-span-5 min-h-[280px] overflow-hidden rounded-2xl bg-slate-900/70 backdrop-blur-xl md:col-span-6 md:min-h-[320px]">
      <MapWeather
        coords={coords}
        weatherCode={weatherCode}
        cityName={coords.name}
      />
    </div>
  );
};

export default MapTemperature;
