interface ErrorMessageProps {
  message: string;
  onRetry: () => Promise<void>;
  city: string;
  hasWeather: boolean;
}

function ErrorMessage({
  message,
  onRetry,
  city,
  hasWeather,
}: ErrorMessageProps) {
  return (
    <section
      className="grid min-h-64 place-items-center gap-3 rounded-[28px] border border-cyan-900/12 bg-[linear-gradient(180deg,rgba(251,191,36,0.12),rgba(255,255,255,0.9))] p-6 text-center"
      aria-live="polite"
    >
      <p className="text-[1.15rem] font-bold text-slate-950">
        We couldn&apos;t load {city} right now.
      </p>
      <p className="text-slate-700">{message}</p>
      <button
        className="rounded-[18px] border-0 bg-[linear-gradient(135deg,#0f766e,#2563eb)] px-5 py-4 font-bold text-white transition duration-150 hover:-translate-y-px hover:shadow-[0_12px_28px_rgba(37,99,235,0.22)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-400/35"
        type="button"
        onClick={() => void onRetry()}
      >
        Retry
      </button>
      {hasWeather ? (
        <p className="text-[0.92rem] text-slate-600">
          The last successful weather card stays visible below.
        </p>
      ) : null}
    </section>
  );
}

export default ErrorMessage;
