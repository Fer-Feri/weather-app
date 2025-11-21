import snowImg from "../images/weather-icon/snow.png";

const HumidityCard = () => {
  return (
    <div className="humidity-card">
      {/* left content */}
      <div className="flex flex-col items-start justify-center gap-1">
        <p className="font-head mb-4 text-lg text-white sm:text-xl">Humidity</p>
        <p className="text-sm text-gray-300 sm:text-base">Good Air Quality</p>
        <p className="text-mint-400 text-base font-semibold sm:text-lg">45%</p>
      </div>

      {/* weather icon */}
      <img
        src={snowImg}
        alt="Snowy"
        className="mt-3 w-16 animate-[float_6s_ease-in-out_infinite] sm:mt-0 sm:w-24"
      />
    </div>
  );
};

export default HumidityCard;
