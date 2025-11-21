import rainImg from "../images/weather-icon/rain.png";

const CityList = () => {
  return (
    <div className="row-span-4 flex flex-col gap-4 rounded-2xl">
      {/* city 1 */}
      <div className="near-city-card">
        <div className="flex items-center gap-3">
          <img src={rainImg} alt="Rain" className="w-10 sm:w-12" />
          <div>
            <p className="font-head text-base text-white sm:text-lg">
              New York
            </p>
            <p className="text-sm text-gray-400">Sunny</p>
          </div>
        </div>
        <p className="text-mint-400 text-sm font-medium sm:text-base">
          22°C / 19°C
        </p>
      </div>

      {/* city 2 */}
      <div className="near-city-card">
        <div className="flex items-center gap-3">
          <img src={rainImg} alt="Rain" className="w-10 sm:w-12" />
          <div>
            <p className="font-head text-base text-white sm:text-lg">London</p>
            <p className="text-sm text-gray-400">Bright</p>
          </div>
        </div>
        <p className="text-mint-400 text-sm font-medium sm:text-base">
          24°C / 26°C
        </p>
      </div>
    </div>
  );
};

export default CityList;
