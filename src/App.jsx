import { useWeather } from "./api/useWeather";
import { useState } from "react";
import WeatherNowCard from "./components/WeatherNowCard";
import MapTemperature from "./components/map/MapTemperature";
import Header from "./components/Header";
import CityList from "./components/CityList";
import DayPeriodsCard from "./components/DayPeriodsCard";
import TomorrowCard from "./components/TomorrowCard";
import LoadingSkeleton from "./components/LoadingSkeleton";
import { useRandomCitiesWeather } from "./hooks/useRandomCitiesWeather";

const App = () => {
  const [searchCity, setSearchCity] = useState("Sanandaj");

  const { data, isLoading, error } = useWeather(searchCity); // دریافت اطلاعات شهر اصلی

  const { data: randomCitiesWeather } = useRandomCitiesWeather(searchCity);

  return (
    <main className="flex min-h-screen min-w-screen items-center justify-center bg-gradient-to-tr from-slate-800 via-slate-700 to-slate-900 p-6">
      <section className="card-weather">
        <Header onSearch={setSearchCity} />

        {isLoading && <LoadingSkeleton />}

        {error && !isLoading && (
          <div className="col-span-12 rounded-xl bg-red-900/20 p-6 text-center backdrop-blur-sm">
            <p className="text-xl text-red-400">⚠️ خطا: {error.message}</p>
          </div>
        )}

        {!isLoading && data && (
          <>
            <WeatherNowCard weatherData={data} />
            <MapTemperature weatherData={data} />
            <div className="col-span-12 row-span-6 rounded-2xl md:col-span-4">
              <CityList nearCities={randomCitiesWeather} />
            </div>
            <DayPeriodsCard weatherData={data} />
            <TomorrowCard weatherData={data} cityName={searchCity} />
          </>
        )}
      </section>
    </main>
  );
};

export default App;
