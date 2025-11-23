import map from "../../images/map.png";
import MapControls from "./MapControls";

const MapTemperature = () => {
  return (
    <div className="relative col-span-12 row-span-5 min-h-[280px] overflow-hidden rounded-2xl bg-slate-900/70 backdrop-blur-xl md:col-span-6 md:min-h-[320px]">
      {/* map */}
      <div className="relative h-full w-full">
        <img
          src={map}
          alt="Temperature Map"
          className="h-full w-full object-cover object-center"
        />

        {/* Dark overlay for consistency */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-900/40"></div>
      </div>
    </div>
  );
};

export default MapTemperature;
