import tomorrowSnow from "../images/tomorrow/tomorrow-snow.png";

const TomorrowCard = () => {
  return (
    <div className="relative col-span-12 row-span-6 flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl p-5 md:col-span-4 md:min-h-[320px]">
      {/* Image layer */}
      <img
        src={tomorrowSnow}
        alt="tomorrow weather"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Gradient overlay for better text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/70" />

      {/* Content layer */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* top info */}
        <div className="w-fit rounded-lg bg-slate-900/50 px-3 py-2 backdrop-blur-sm">
          <p className="text-xs tracking-wide text-slate-300 opacity-90">
            Tomorrow
          </p>
          <h3 className="text-lg font-semibold text-white md:text-xl">
            Dhaka, Bangladesh
          </h3>
        </div>

        {/* bottom info */}
        <div className="w-fit rounded-lg bg-slate-900/50 px-3 py-2 backdrop-blur-sm">
          <p className="text-3xl font-bold text-white">25°C</p>
          <p className="text-sm tracking-wide text-slate-300">Snowy</p>
        </div>
      </div>
    </div>
  );
};

export default TomorrowCard;
