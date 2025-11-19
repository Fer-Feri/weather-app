export async function getWeather(lat, lon) {
	const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

	const params = new URLSearchParams({
		latitude: lat,
		longitude: lon,
		current: 'temperature_2m,weathercode',
		timezone: 'auto',
	});

	const response = await fetch(`${BASE_URL}?${params}`);
	if (!response.ok) throw new Error('خطا در دریافت اطلاعات');

	return response.json();
}
