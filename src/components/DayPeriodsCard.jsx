import temp from "../images/weather-icon/thermometer.png";
import umbrella from "../images/weather-icon/umbrella.png";
import wind from "../images/weather-icon/wind.png";
import morning from "../images/weather-icon/morning.png";
import afternoon from "../images/weather-icon/afternoon.png";
import evening from "../images/weather-icon/evening.png";
import night from "../images/weather-icon/night.png";

const DayPeriodsCard = () => {
  return (
    <div className="col-span-12 row-span-6 flex flex-col gap-4 rounded-2xl bg-slate-900/70 p-5 backdrop-blur-xl md:col-span-4 md:p-6">
      {/* header */}
      <div className="flex items-start justify-between">
        <p className="font-head text-xs leading-snug text-white md:text-base">
          How is the <br />
          temperature today?
        </p>

        <div className="flex gap-3">
          <img
            src={temp}
            alt="temp"
            className="h-5 w-5 opacity-80 transition hover:opacity-100 md:h-7 md:w-7"
          />
          <img
            src={umbrella}
            alt="umbrella"
            className="h-5 w-5 opacity-80 transition hover:opacity-100 md:h-7 md:w-7"
          />
          <img
            src={wind}
            alt="wind"
            className="h-5 w-5 opacity-80 transition hover:opacity-100 md:h-7 md:w-7"
          />
        </div>
      </div>

      {/* body */}
      <div className="mt-4 grid h-full grid-cols-2 gap-x-2 gap-y-6 text-center text-white sm:grid-cols-4">
        {/* period item */}
        {[
          { label: "Morning", temp: 20, icon: morning },
          { label: "Afternoon", temp: 24, icon: afternoon, active: true },
          { label: "Evening", temp: 28, icon: evening },
          { label: "Night", temp: 22, icon: night },
        ].map((period, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-between gap-2 sm:gap-3"
          >
            {/* Icon */}
            <div
              className={`flex items-center justify-center rounded-full border p-2 transition-all duration-200 md:p-3 ${
                period.active
                  ? "bg-mint-500/20 border-mint-400"
                  : "hover:border-mint-400/50 border-slate-700 bg-slate-800/30"
              }`}
            >
              <img
                src={period.icon}
                alt={period.label}
                className={`h-6 w-6 md:h-9 md:w-9 ${
                  period.active ? "brightness-125" : "opacity-90"
                }`}
              />
            </div>

            {/* Temp + Label */}
            <div className="flex flex-col items-center gap-0.5">
              <p
                className={`text-sm md:text-base ${period.active ? "text-mint-400 font-semibold" : ""}`}
              >
                {period.temp}°
              </p>
              <span className="text-xs text-gray-400">{period.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayPeriodsCard;
