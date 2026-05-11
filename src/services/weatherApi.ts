import type {
  OpenWeatherErrorResponse,
  OpenWeatherResponse,
  WeatherData,
} from "../types/weather.types";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL =
  import.meta.env.VITE_WEATHER_BASE_URL ??
  "https://api.openweathermap.org/data/2.5";

function mapWeatherResponse(data: OpenWeatherResponse): WeatherData {
  const currentWeather = data.weather[0];

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    condition: currentWeather.main,
    description: currentWeather.description,
    icon: `https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`,
    pressure: data.main.pressure,
    visibility: data.visibility,
  };
}

export async function fetchWeather(city: string): Promise<WeatherData> {
  if (!API_KEY) {
    throw new Error(
      "Missing weather API key. Add VITE_WEATHER_API_KEY to your .env file.",
    );
  }

  const url = new URL(`${BASE_URL}/weather`);
  url.searchParams.set("q", city);
  url.searchParams.set("appid", API_KEY);
  url.searchParams.set("units", "metric");

  const response = await fetch(url.toString());

  if (!response.ok) {
    let errorPayload: OpenWeatherErrorResponse | null = null;

    try {
      errorPayload = (await response.json()) as OpenWeatherErrorResponse;
    } catch {
      // Some upstream failures return an empty body, so we fall back to a generic message.
    }

    if (response.status === 401) {
      throw new Error(
        "Your OpenWeather API key is invalid. Update VITE_WEATHER_API_KEY in .env and restart the dev server.",
      );
    }

    if (response.status === 404) {
      throw new Error(`No weather results found for "${city}".`);
    }

    throw new Error(
      errorPayload?.message
        ? `Weather API error: ${errorPayload.message}.`
        : "Unable to fetch weather right now. Please try again.",
    );
  }

  const data = (await response.json()) as OpenWeatherResponse;
  return mapWeatherResponse(data);
}
