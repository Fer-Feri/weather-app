import map from "../../images/map.png";
import MapControls from "./MapControls";

const MapTemperature = () => {
  return (
    <div className="relative col-span-12 row-span-5 overflow-hidden rounded-2xl bg-gray-500 md:col-span-6">
      {/* map */}
      <div className="">
        <img src={map} alt="" className="bg-cover bg-center bg-no-repeat" />
      </div>

      {/* <MapControls
        onZoomIn={() => mapRef.current.zoomIn()}
        onZoomOut={() => mapRef.current.zoomOut()}
        onToggleFullscreen={toggleFullScreenHandler}
        onToggleLayers={toggleLayersHandler}
        onToggleVisibility={toggleVisibilityHandler}
      /> */}

      <MapControls
      // onZoomIn={() => console.log("zoom in")}
      // onZoomOut={() => console.log("zoom out")}
      // onToggleFullscreen={() => console.log("fullscreen")}
      // onToggleLayers={() => console.log("toggle layers")}
      // onToggleVisibility={() => console.log("toggle visibility")}
      />
    </div>
  );
};

export default MapTemperature;
