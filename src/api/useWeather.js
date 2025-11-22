import { useQuery } from "@tanstack/react-query";
import { getCoordinates } from "./getCoordiants";
import { getWeather } from "./getWeather";

export function useWeather(cityName) {
  return useQuery({
    queryKey: ["weather", cityName],
    queryFn: async () => {
      const coords = await getCoordinates(cityName);
      const weatherData = await getWeather(coords.latitude, coords.longitude);

      return {
        coords: coords,
        weather: weatherData,
      };
    },
    enabled: !!cityName && cityName.length > 0,
    staleTime: 5 * 60 * 1000,
  });
}
