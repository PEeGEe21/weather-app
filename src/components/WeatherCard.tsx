import type { WeatherData } from "../types/weather.types";
import {
  formatTemperature,
  titleCase,
} from "../utils/formatWeather";
import WeatherDetails from "./WeatherDetails";

interface WeatherCardProps {
  weather: WeatherData;
  variant: "default" | "search";
}

const WeatherCard = ({ weather, variant }: WeatherCardProps) => {
  return (
    <article
      className={`rounded-[28px] border border-cyan-900/12 p-6 ${
        variant === "search"
          ? "bg-[linear-gradient(180deg,rgba(59,130,246,0.1),rgba(255,255,255,0.88))]"
          : "bg-[linear-gradient(180deg,rgba(14,165,233,0.12),rgba(255,255,255,0.85))]"
      }`}
    >
      <div className="mb-[22px] flex flex-col items-start justify-between gap-5 sm:flex-row">
        <div>
          <p className="mb-2.5 text-[0.85rem] font-bold uppercase tracking-[0.08em] text-cyan-800">
            {variant === "default" ? "Default forecast" : "Search result"}
          </p>
          <h2 className="mb-1.5 text-[clamp(1.8rem,4vw,2.8rem)] leading-none text-slate-950">
            {weather.city}, {weather.country}
          </h2>
          <p className="text-slate-600">{titleCase(weather.description)}</p>
        </div>

        <div className="flex w-full items-center justify-between gap-3 text-left sm:w-auto sm:text-right">
          <img
            className="h-[88px] w-[88px]"
            src={weather.icon}
            alt={weather.condition}
          />
          <div>
            <p className="m-0 text-[clamp(2.6rem,6vw,4rem)] leading-none font-bold text-slate-950">
              {formatTemperature(weather.temperature)}
            </p>
            <p className="text-slate-600">{weather.condition}</p>
          </div>
        </div>
      </div>

      <WeatherDetails weather={weather} />
    </article>
  );
};

export default WeatherCard;
