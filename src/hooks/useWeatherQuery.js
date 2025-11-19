import { useQuery } from '@tanstack/react-query';
import { getWeather } from '../api/getWeather';

export function useWeatherQuery(lat, lon) {
	return useQuery({
		queryKey: ['weather', lat, lon],
		queryFn: () => getWeather(lat, lon),
		enabled: !!lat && !!lon, // فقط وقتی مختصات وجود داره اجرا میشه
		staleTime: 1000 * 60, // داده تا ۱ دقیقه معتبره
	});
}
