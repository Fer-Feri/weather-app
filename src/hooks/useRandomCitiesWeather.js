import { useQuery } from "@tanstack/react-query";
import { getRandomCities } from "../utils/getRandomCities";

import { cities } from "../data/cities";
import { getCoordinates } from "../api/getCoordiants";
import { getWeather } from "../api/getWeather";

export function useRandomCitiesWeather(searchCity) {
  return useQuery({
    queryKey: ["randomCitiesWeather", searchCity],
    queryFn: async () => {
      // حذف شهر سرچ شده از لیست
      const availableCity = cities.filter(
        (city) => city.toLowerCase() !== searchCity.toLowerCase(),
      );

      // 👇 انتخاب ۳ شهر تصادفی از لیست فیلتر شده
      const randomCities = getRandomCities(availableCity, 3);

      const data = await Promise.all(
        randomCities.map(async (city) => {
          try {
            const coords = await getCoordinates(city);
            const weather = await getWeather(coords.latitude, coords.longitude);

            return { city, coords, weather };
          } catch (error) {
            console.error(`خطا در دریافت ${city}:`, error);
            return null;
          }
        }),
      );

      return data.filter(Boolean);
    },
    staleTime: 5 * 60 * 1000,
  });
}
