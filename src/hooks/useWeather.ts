import { useEffect, useState } from "react";
import { fetchWeather } from "../services/weatherApi";
import type { WeatherData } from "../types/weather.types";

const DEFAULT_CITY = "Lagos";
const STORAGE_KEY = "weather-app:last-weather";

function readStoredWeather() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedWeather = window.localStorage.getItem(STORAGE_KEY);
    return storedWeather ? (JSON.parse(storedWeather) as WeatherData) : null;
  } catch {
    return null;
  }
}

export function useWeather() {
  const cachedWeather = readStoredWeather();
  const [weather, setWeather] = useState<WeatherData | null>(cachedWeather);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCity, setCurrentCity] = useState(
    cachedWeather?.city ?? DEFAULT_CITY,
  );
  const [hasSearched, setHasSearched] = useState(
    Boolean(cachedWeather && cachedWeather.city !== DEFAULT_CITY),
  );

  async function loadWeather(city: string, searched = false) {
    setLoading(true);
    setError(null);
    setCurrentCity(city);

    try {
      const nextWeather = await fetchWeather(city);
      setWeather(nextWeather);
      setHasSearched(searched);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextWeather));
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "Something went wrong while loading weather data.";

      setError(message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void Promise.resolve().then(() => loadWeather(DEFAULT_CITY));
  }, []);

  async function searchWeather(city: string) {
    await loadWeather(city, true);
  }

  async function retry() {
    await loadWeather(currentCity, hasSearched);
  }

  return {
    weather,
    loading,
    error,
    currentCity,
    hasSearched,
    searchWeather,
    retry,
  };
}
