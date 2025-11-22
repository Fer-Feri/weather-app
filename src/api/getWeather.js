import axios from "axios";

export async function getWeather(latitude, longitude) {
  const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude,
      longitude,
      current: "temperature_2m,weather_code",
      daily: "temperature_2m_max,temperature_2m_min",
      timezone: "auto",
      hourly: "temperature_2m,relativehumidity_2m,weathercode",
      current_weather: true,
    },
  });

  if (response.status !== 200)
    throw new Error("خطا در دریافت اطلاعات آب و هوا");

  return response.data;
}
