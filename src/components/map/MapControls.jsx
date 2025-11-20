import { Icons } from "../../images/Icons";

const MapControls = () => {
  return (
    <div className="absolute top-6 right-6 z-[1000] flex flex-col items-center gap-3">
      {/* Fullscreen */}
      <button
        // onClick={onToggleFullscreen}
        className="rounded-full bg-lime-400 p-2 shadow-lg transition-colors hover:bg-lime-300"
        title="Fullscreen"
      >
        <Icons.ToggleFullscreen className="h-5 w-5 text-black" />
      </button>

      {/* Zoom In / Out */}
      <div className="flex flex-col items-center rounded-full bg-orange-500 py-1 shadow-lg">
        <button
          // onClick={onZoomIn}
          className="p-1 text-white transition-colors hover:text-black"
          title="Zoom In"
        >
          <Icons.ZoomIn className="h-5 w-5" />
        </button>
        <button
          // onClick={onZoomOut}
          className="p-1 text-white transition-colors hover:text-black"
          title="Zoom Out"
        >
          <Icons.ZoomOut className="h-5 w-5" />
        </button>
      </div>

      {/* Visibility */}
      <button
        // onClick={onToggleVisibility}
        className="rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-200"
        title="Toggle Visibility"
      >
        <Icons.ToggleVisibility className="h-5 w-5 text-black" />
      </button>

      {/* Layers */}
      <button
        // onClick={onToggleLayers}
        className="rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-200"
        title="Toggle Layers"
      >
        <Icons.ToggleLayers className="h-5 w-5 text-black" />
      </button>
    </div>
  );
};

export default MapControls;
