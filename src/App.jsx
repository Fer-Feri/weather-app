// import { useWeatherQuery } from './hooks/useWeatherQuery';
import WeatherNowCard from "./components/WeatherNowCard";
import MapTemperature from "./components/map/MapTemperature";
import Header from "./components/Header";
import CityList from "./components/CityList";
import HumidityCard from "./components/HumidityCard";
import DayPeriodsCard from "./components/DayPeriodsCard";
import TommorowCard from "./components/TommorowCard";

const App = () => {
  // const { data, isLoading, error } = useWeatherQuery(35.6892, 51.389);

  // if (isLoading) return <p className="text-4xl text-green-500">در حال بارگزاری...</p>;
  // if (error) return <p className="text-4xl text-red-500">خطا در دریافت اطلاعات</p>;

  // const currentData = data?.current;

  return (
    <main className="flex min-h-screen min-w-screen items-center justify-center bg-gradient-to-tr from-slate-800 via-slate-700 to-slate-900 p-6">
      <section className="card-weather">
        <Header />
        <WeatherNowCard />
        <MapTemperature />
        <div className="col-span-12 row-span-6 rounded-2xl md:col-span-4">
          <CityList />
          <HumidityCard />
        </div>
        <DayPeriodsCard />
        <TommorowCard />
      </section>
    </main>
  );
};

export default App;
