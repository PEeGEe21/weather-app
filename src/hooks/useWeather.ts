import { useEffect, useState } from "react";
import { fetchWeather } from "../services/weatherApi";
import type { WeatherData } from "../types/weather.types";

const DEFAULT_CITY = "Lagos";

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCity, setCurrentCity] = useState(DEFAULT_CITY);
  const [hasSearched, setHasSearched] = useState(false);

  async function loadWeather(city: string, searched = false) {
    setLoading(true);
    setError(null);
    setCurrentCity(city);

    try {
      const nextWeather = await fetchWeather(city);
      setWeather(nextWeather);
      setHasSearched(searched);
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
