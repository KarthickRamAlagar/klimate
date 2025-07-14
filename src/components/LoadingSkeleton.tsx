import { Skeleton } from "./ui/skeleton";

const WeatherSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Favorite Cities Placeholder */}
      <Skeleton className="h-10 w-1/3 rounded-md" />

      {/* Header & Refresh Button Placeholder */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-40 rounded-md" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>

      {/* Current Weather & Hourly Temperature */}
      <div className="flex flex-col lg:flex-row gap-4">
        <Skeleton className="h-[300px] w-full rounded-lg" />
        <Skeleton className="h-[300px] w-full rounded-lg" />
      </div>

      {/* Weather Details & Forecast */}
      <div className="grid gap-6 md:grid-cols-2 items-start">
        <Skeleton className="h-[300px] w-full rounded-lg" />
        <Skeleton className="h-[300px] w-full rounded-lg" />
      </div>
    </div>
  );
};

export default WeatherSkeleton;
