import rainImg from "../images/weather-icon/rain.png";

const CityList = () => {
  return (
    <div className="row-span-4 flex flex-col gap-3 rounded-2xl">
      {/* city 1 */}
      <div className="flex items-center justify-between rounded-xl bg-slate-900/70 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-slate-900/80 md:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/50 p-2 md:h-14 md:w-14">
            <img
              src={rainImg}
              alt="Rain"
              className="h-full w-full object-contain opacity-90"
            />
          </div>
          <div>
            <p className="text-base font-semibold text-white md:text-lg">
              New York
            </p>
            <p className="text-sm text-slate-400">Sunny</p>
          </div>
        </div>
        <p className="text-sm font-semibold text-white md:text-base">
          22°C / 19°C
        </p>
      </div>

      {/* city 2 */}
      <div className="flex items-center justify-between rounded-xl bg-slate-900/70 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-slate-900/80 md:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/50 p-2 md:h-14 md:w-14">
            <img
              src={rainImg}
              alt="Rain"
              className="h-full w-full object-contain opacity-90"
            />
          </div>
          <div>
            <p className="text-base font-semibold text-white md:text-lg">
              London
            </p>
            <p className="text-sm text-slate-400">Bright</p>
          </div>
        </div>
        <p className="text-sm font-semibold text-white md:text-base">
          24°C / 26°C
        </p>
      </div>
    </div>
  );
};

export default CityList;
