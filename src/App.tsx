import ErrorMessage from "./components/ErrorMessage";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { useWeather } from "./hooks/useWeather";

function App() {
  const {
    weather,
    loading,
    error,
    currentCity,
    hasSearched,
    searchWeather,
    retry,
  } = useWeather();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fff8ef_0%,#eef6ff_52%,#dbeafe_100%)] px-4 py-4 sm:px-5 sm:py-8">
      <div
        className="pointer-events-none absolute -right-16 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,194,92,0.95),rgba(255,194,92,0))] opacity-70 blur-md"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(87,138,255,0.45),rgba(87,138,255,0))] opacity-70 blur-md"
        aria-hidden="true"
      />

      <section className="relative z-10 mx-auto w-full max-w-5xl rounded-[32px] border border-slate-900/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(242,247,255,0.92))] p-5 shadow-[0_24px_80px_rgba(11,37,69,0.12)] backdrop-blur-[14px] sm:p-8">
        <Header currentCity={currentCity} />
        <SearchBar onSearch={searchWeather} loading={loading} />

        <div className="grid gap-5">
          {loading ? <LoadingSpinner city={currentCity} /> : null}

          {!loading && error ? (
            <ErrorMessage
              message={error}
              onRetry={retry}
              city={currentCity}
              hasWeather={Boolean(weather)}
            />
          ) : null}

          {!loading && weather ? (
            <WeatherCard
              weather={weather}
              variant={hasSearched ? "search" : "default"}
            />
          ) : null}
        </div>
      </section>
    </main>
  );
}

export default App;
