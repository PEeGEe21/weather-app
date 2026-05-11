import type { WeatherData } from "../types/weather.types";
import {
  formatTemperature,
  formatVisibility,
  formatWindSpeed,
} from "../utils/formatWeather";

interface WeatherDetailsProps {
  weather: WeatherData;
}

const WeatherDetails = ({ weather }: WeatherDetailsProps) => {
  const details = [
    { label: "Feels like", value: formatTemperature(weather.feelsLike) },
    { label: "Humidity", value: `${weather.humidity}%` },
    { label: "Wind speed", value: formatWindSpeed(weather.windSpeed) },
    { label: "Pressure", value: `${weather.pressure} hPa` },
    { label: "Visibility", value: formatVisibility(weather.visibility) },
  ];

  return (
    <dl className="m-0 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
      {details.map((detail) => (
        <div
          className="rounded-[20px] bg-white/80 p-[18px] shadow-[inset_0_0_0_1px_rgba(15,95,116,0.08)]"
          key={detail.label}
        >
          <dt className="mb-2 text-[0.9rem] text-slate-600">{detail.label}</dt>
          <dd className="m-0 text-[1.15rem] font-bold text-slate-950">
            {detail.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default WeatherDetails;
