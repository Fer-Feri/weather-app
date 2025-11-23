import { useState } from "react";
import temp from "../images/weather-icon/thermometer.png";
import umbrella from "../images/weather-icon/umbrella.png";
import wind from "../images/weather-icon/wind.png";
import morning from "../images/weather-icon/morning.png";
import afternoon from "../images/weather-icon/afternoon.png";
import evening from "../images/weather-icon/evening.png";
import night from "../images/weather-icon/night.png";

import {
  calculatePeriodTemp,
  calculatePeriodRain,
  calculatePeriodWind,
  getCurrentPeriod,
  TIME_PERIODS,
  DATA_TYPES,
} from "../utils/temperatureHelpers";

const DayPeriodsCard = ({ weatherData }) => {
  // State برای نگهداری نوع داده فعلی
  const [activeDataType, setActiveDataType] = useState(DATA_TYPES.TEMPERATURE);

  // چک کردن وجود داده
  const hourlyData = weatherData?.weather?.hourly;

  if (!hourlyData) {
    return (
      <div className="col-span-12 row-span-6 flex items-center justify-center rounded-2xl bg-slate-900/70 p-5 backdrop-blur-xl md:col-span-4">
        <p className="text-slate-400">Loading data...</p>
      </div>
    );
  }

  const currentPeriod = getCurrentPeriod();

  // تابع برای محاسبه مقدار بر اساس نوع داده
  const calculateValue = (startHour, endHour) => {
    switch (activeDataType) {
      case DATA_TYPES.TEMPERATURE:
        return {
          value: calculatePeriodTemp(
            hourlyData.temperature_2m,
            startHour,
            endHour,
          ),
          unit: "°",
        };
      case DATA_TYPES.RAIN:
        return {
          value: calculatePeriodRain(hourlyData.rain, startHour, endHour),
          unit: "mm",
        };
      case DATA_TYPES.WIND:
        return {
          value: calculatePeriodWind(
            hourlyData.windspeed_10m,
            startHour,
            endHour,
          ),
          unit: "km/h",
        };
      default:
        return { value: null, unit: "" };
    }
  };

  // ساخت آرایه periods
  const periods = [
    {
      label: "Morning",
      data: calculateValue(
        TIME_PERIODS.MORNING.start,
        TIME_PERIODS.MORNING.end,
      ),
      icon: morning,
      active: currentPeriod === "morning",
    },
    {
      label: "Afternoon",
      data: calculateValue(
        TIME_PERIODS.AFTERNOON.start,
        TIME_PERIODS.AFTERNOON.end,
      ),
      icon: afternoon,
      active: currentPeriod === "afternoon",
    },
    {
      label: "Evening",
      data: calculateValue(
        TIME_PERIODS.EVENING.start,
        TIME_PERIODS.EVENING.end,
      ),
      icon: evening,
      active: currentPeriod === "evening",
    },
    {
      label: "Night",
      data: calculateValue(TIME_PERIODS.NIGHT.start, TIME_PERIODS.NIGHT.end),
      icon: night,
      active: currentPeriod === "night",
    },
  ];

  // متن هدر بر اساس نوع داده
  const getHeaderText = () => {
    switch (activeDataType) {
      case DATA_TYPES.TEMPERATURE:
        return "How is the temperature today?";
      case DATA_TYPES.RAIN:
        return "How much rain today?";
      case DATA_TYPES.WIND:
        return "How is the wind today?";
      default:
        return "Weather Information";
    }
  };

  return (
    <div className="col-span-12 row-span-6 flex min-h-[280px] flex-col gap-5 rounded-2xl bg-slate-900/70 p-5 backdrop-blur-xl md:col-span-4 md:min-h-[320px] md:gap-6 md:p-6">
      {/* header */}
      <div className="flex items-start justify-between">
        <p className="text-xs leading-relaxed font-medium text-white md:text-base">
          {getHeaderText().split(" ").slice(0, 3).join(" ")} <br />
          {getHeaderText().split(" ").slice(3).join(" ")}
        </p>

        <div className="flex gap-2 rounded-lg bg-slate-800/50 p-1 backdrop-blur-sm md:gap-3">
          <img
            src={temp}
            alt="temperature"
            onClick={() => setActiveDataType(DATA_TYPES.TEMPERATURE)}
            className={`h-5 w-5 cursor-pointer transition md:h-6 md:w-6 ${
              activeDataType === DATA_TYPES.TEMPERATURE
                ? "scale-110 opacity-100"
                : "opacity-50 hover:opacity-80"
            }`}
          />
          <img
            src={umbrella}
            alt="rain"
            onClick={() => setActiveDataType(DATA_TYPES.RAIN)}
            className={`h-5 w-5 cursor-pointer transition md:h-6 md:w-6 ${
              activeDataType === DATA_TYPES.RAIN
                ? "scale-110 opacity-100"
                : "opacity-50 hover:opacity-80"
            }`}
          />
          <img
            src={wind}
            alt="wind"
            onClick={() => setActiveDataType(DATA_TYPES.WIND)}
            className={`h-5 w-5 cursor-pointer transition md:h-6 md:w-6 ${
              activeDataType === DATA_TYPES.WIND
                ? "scale-110 opacity-100"
                : "opacity-50 hover:opacity-80"
            }`}
          />
        </div>
      </div>

      {/* body */}
      <div className="grid flex-1 grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 md:gap-x-4 md:gap-y-6">
        {periods.map((period, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-3"
          >
            <div
              className={`flex items-center justify-center rounded-full border-2 p-3 transition-all duration-300 md:p-4 ${
                period.active
                  ? "border-orange-400 bg-orange-500/20 shadow-lg shadow-orange-500/20"
                  : "border-slate-700/50 bg-slate-800/40 hover:border-slate-600 hover:bg-slate-800/60"
              }`}
            >
              <img
                src={period.icon}
                alt={period.label}
                className={`h-7 w-7 md:h-10 md:w-10 ${
                  period.active ? "brightness-110" : "opacity-80"
                }`}
              />
            </div>

            <div className="flex flex-col items-center gap-1">
              <p
                className={`text-xs font-semibold md:text-sm ${
                  period.active ? "text-white" : "text-slate-300"
                }`}
              >
                {period.data.value !== null
                  ? `${period.data.value}${period.data.unit}`
                  : "--"}
              </p>
              <span className="text-xs text-slate-400">{period.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayPeriodsCard;
