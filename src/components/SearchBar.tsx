import { useState } from "react";
import type { FormEvent } from "react";

interface SearchBarProps {
  onSearch: (city: string) => Promise<void>;
  loading: boolean;
}

const SearchBar = ({ onSearch, loading }: SearchBarProps) => {
  const [city, setCity] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedCity = city.trim();
    if (!trimmedCity) {
      return;
    }

    await onSearch(trimmedCity);
  }

  return (
    <form className="mb-6 grid gap-3" onSubmit={handleSubmit}>
      <label
        className="text-[0.92rem] font-bold text-slate-800"
        htmlFor="city-search"
      >
        Search by city name
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="city-search"
          name="city"
          className="min-w-0 flex-1 rounded-[18px] border-0 bg-white/92 px-[18px] py-4 text-slate-950 shadow-[inset_0_0_0_1px_rgba(15,95,116,0.12)] outline-3 outline-offset-2 outline-transparent placeholder:text-slate-500 focus-visible:outline-blue-400/35 disabled:cursor-not-allowed"
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Try Abuja, Nairobi, London..."
          autoComplete="off"
          disabled={loading}
        />
        <button
          className="w-full rounded-[18px] border-0 bg-[linear-gradient(135deg,#0f766e,#2563eb)] px-5 py-4 font-bold text-white transition duration-150 hover:-translate-y-px hover:shadow-[0_12px_28px_rgba(37,99,235,0.22)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-400/35 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          type="submit"
          disabled={loading}
        >
          {loading ? "Checking..." : "Search"}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
