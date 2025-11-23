import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getWeatherIcon } from "../../utils/getWeatherIcon";

const MapWeather = ({ coords, weatherCode, cityName }) => {
  if (!coords?.latitude || !coords?.longitude) return null;

  const iconUrl = getWeatherIcon(weatherCode);

  // 🎨 استفاده از DivIcon برای ظاهر بهتر
  const icon = L.divIcon({
    className: "custom-weather-marker", // برای override استایل پیش‌فرض
    html: `
      <div class="flex items-center justify-center w-16 h-16 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-mint/40">
        <img src="${iconUrl}" alt="weather" class="w-12 h-12 drop-shadow-md" />
      </div>
    `,
    iconSize: [64, 64], // اندازه کل المنت
    iconAnchor: [32, 32], // نقطه مرکزی marker
  });

  return (
    <MapContainer
      key={`${coords.latitude}-${coords.longitude}-${cityName}`} //کلید برای هر سرچ
      center={[coords.latitude, coords.longitude]}
      zoom={9}
      scrollWheelZoom={false}
      zoomControl={false}
      doubleClickZoom={false}
      dragging={false}
      attributionControl={false}
      className="h-full w-full rounded-2xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=""
      />

      <Marker position={[coords.latitude, coords.longitude]} icon={icon}>
        <Popup>
          <div className="text-center text-sm">
            <p className="font-semibold">{cityName}</p>
            <p className="text-gray-600">کد وضعیت: {weatherCode}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWeather;
