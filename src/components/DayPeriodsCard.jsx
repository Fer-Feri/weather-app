import temp from "../images/weather-icon/thermometer.png";
import umbrella from "../images/weather-icon/umbrella.png";
import wind from "../images/weather-icon/wind.png";
import morning from "../images/weather-icon/morning.png";
import afternoon from "../images/weather-icon/afternoon.png";
import evening from "../images/weather-icon/evening.png";
import night from "../images/weather-icon/night.png";

const DayPeriodsCard = () => {
  return (
    <div className="col-span-12 row-span-6 flex min-h-[280px] flex-col gap-5 rounded-2xl bg-slate-900/70 p-5 backdrop-blur-xl md:col-span-4 md:min-h-[320px] md:gap-6 md:p-6">
      {/* header */}
      <div className="flex items-start justify-between">
        <p className="text-xs leading-relaxed font-medium text-white md:text-base">
          How is the <br />
          temperature today?
        </p>

        <div className="flex gap-2 rounded-lg bg-slate-800/50 p-1 backdrop-blur-sm md:gap-3">
          <img
            src={temp}
            alt="temp"
            className="h-5 w-5 cursor-pointer opacity-70 transition hover:opacity-100 md:h-6 md:w-6"
          />
          <img
            src={umbrella}
            alt="umbrella"
            className="h-5 w-5 cursor-pointer opacity-70 transition hover:opacity-100 md:h-6 md:w-6"
          />
          <img
            src={wind}
            alt="wind"
            className="h-5 w-5 cursor-pointer opacity-70 transition hover:opacity-100 md:h-6 md:w-6"
          />
        </div>
      </div>

      {/* body */}
      <div className="grid flex-1 grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 md:gap-x-4 md:gap-y-6">
        {[
          { label: "Morning", temp: 20, icon: morning },
          { label: "Afternoon", temp: 24, icon: afternoon, active: true },
          { label: "Evening", temp: 28, icon: evening },
          { label: "Night", temp: 22, icon: night },
        ].map((period, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-3"
          >
            {/* Icon */}
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

            {/* Temp + Label */}
            <div className="flex flex-col items-center gap-1">
              <p
                className={`text-base font-semibold md:text-lg ${
                  period.active ? "text-white" : "text-slate-300"
                }`}
              >
                {period.temp}°
              </p>
              <span className="text-xs text-slate-400 md:text-sm">
                {period.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayPeriodsCard;
