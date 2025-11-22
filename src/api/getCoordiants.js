import axios from "axios";

export async function getCoordinates(cityName) {
  const response = await axios.get(
    "https://geocoding-api.open-meteo.com/v1/search",
    {
      params: {
        name: cityName,
        // language: "fa",
      },
    },
  );

  if (response.status !== 200) throw new Error("خطایی رخ داده است");

  const firstResult = response.data.results?.[0]; //first result

  if (!firstResult) throw new Error("شهر مورد نظر پیدا نشد");

  return {
    name: firstResult.name,
    country: firstResult.country,
    latitude: firstResult.latitude,
    longitude: firstResult.longitude,
  };
}
