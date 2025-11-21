import { Icons } from "../../images/Icons";

const MapControls = () => {
  return (
    <div className="absolute top-6 right-3 z-[1000] flex flex-col items-center gap-3 md:right-6">
      {/* Fullscreen */}
      <button
        // onClick={onToggleFullscreen}
        className="rounded-full bg-slate-800/70 p-2 text-orange-500 shadow-lg backdrop-blur-sm transition-all hover:bg-slate-700/90 hover:text-orange-400 hover:shadow-orange-500/20"
        title="Fullscreen"
      >
        <Icons.ToggleFullscreen className="h-3 w-3 md:h-5 md:w-5" />
      </button>

      {/* Zoom In / Out */}
      <div className="flex flex-col items-center rounded-full bg-slate-800/70 py-1 shadow-lg backdrop-blur-sm">
        <button
          // onClick={onZoomIn}
          className="p-1 text-orange-500 transition-all hover:text-orange-400"
          title="Zoom In"
        >
          <Icons.ZoomIn className="h-3 w-3 md:h-5 md:w-5" />
        </button>
        <div className="h-px w-4 bg-slate-600"></div>
        <button
          // onClick={onZoomOut}
          className="p-1 text-orange-500 transition-all hover:text-orange-400"
          title="Zoom Out"
        >
          <Icons.ZoomOut className="h-3 w-3 md:h-5 md:w-5" />
        </button>
      </div>

      {/* Visibility */}
      <button
        // onClick={onToggleVisibility}
        className="rounded-full bg-slate-800/70 p-2 text-orange-500 shadow-lg backdrop-blur-sm transition-all hover:bg-slate-700/90 hover:text-orange-400 hover:shadow-orange-500/20"
        title="Toggle Visibility"
      >
        <Icons.ToggleVisibility className="h-3 w-3 md:h-5 md:w-5" />
      </button>

      {/* Layers */}
      <button
        // onClick={onToggleLayers}
        className="rounded-full bg-slate-800/70 p-2 text-orange-500 shadow-lg backdrop-blur-sm transition-all hover:bg-slate-700/90 hover:text-orange-400 hover:shadow-orange-500/20"
        title="Toggle Layers"
      >
        <Icons.ToggleLayers className="h-3 w-3 md:h-5 md:w-5" />
      </button>
    </div>
  );
};

export default MapControls;
