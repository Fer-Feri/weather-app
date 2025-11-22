const LoadingSkeleton = () => {
  return (
    <div className="col-span-12 animate-pulse space-y-4">
      {/* Weather Now Card Skeleton */}
      <div className="weather-now-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-slate-900/85 backdrop-blur-sm"></div>

        <div className="relative z-10 flex h-full flex-col justify-between lg:flex-row">
          <div className="flex flex-col justify-between">
            <div className="h-10 w-32 rounded-full bg-slate-700/50"></div>
            <div className="my-6 space-y-2">
              <div className="h-12 w-48 rounded bg-slate-700/50"></div>
              <div className="h-6 w-24 rounded bg-slate-700/50"></div>
            </div>
            <div className="space-y-2">
              <div className="h-20 w-40 rounded bg-slate-700/50"></div>
              <div className="h-4 w-32 rounded bg-slate-700/50"></div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className="h-32 w-32 rounded-full bg-slate-700/50"></div>
            <div className="mt-6 flex gap-3">
              <div className="h-20 w-24 rounded-xl bg-slate-700/50"></div>
              <div className="h-20 w-24 rounded-xl bg-slate-700/50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Skeleton */}
      <div className="col-span-12 row-span-9 h-64 rounded-2xl bg-slate-800/50 md:col-span-8"></div>

      {/* Side Cards Skeleton */}
      <div className="col-span-12 space-y-4 md:col-span-4">
        <div className="h-40 rounded-2xl bg-slate-800/50"></div>
        <div className="h-40 rounded-2xl bg-slate-800/50"></div>
      </div>

      {/* Bottom Cards Skeleton */}
      <div className="col-span-12 h-32 rounded-2xl bg-slate-800/50 md:col-span-8"></div>
      <div className="col-span-12 h-32 rounded-2xl bg-slate-800/50 md:col-span-4"></div>
    </div>
  );
};

export default LoadingSkeleton;
