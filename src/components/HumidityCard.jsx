import snowImg from "../images/weather-icon/snow.png";

const HumidityCard = () => {
  return (
    <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-900/70 p-5 backdrop-blur-xl md:p-6">
      {/* left content */}
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-white md:text-xl">Humidity</p>
        <p className="text-sm text-slate-400">Good Air Quality</p>
        <p className="text-2xl font-bold text-white md:text-3xl">45%</p>
      </div>

      {/* weather icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-800/50 p-3 md:h-24 md:w-24">
        <img
          src={snowImg}
          alt="Snowy"
          className="h-full w-full animate-[float_6s_ease-in-out_infinite] object-contain opacity-90"
        />
      </div>
    </div>
  );
};

export default HumidityCard;
