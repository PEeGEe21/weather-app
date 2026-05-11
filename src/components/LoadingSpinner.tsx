interface LoadingSpinnerProps {
  city: string;
}

function LoadingSpinner({ city }: LoadingSpinnerProps) {
  return (
    <div
      className="grid min-h-64 place-items-center gap-3 rounded-[28px] border border-cyan-900/12 bg-[linear-gradient(180deg,rgba(14,165,233,0.12),rgba(255,255,255,0.85))] p-6 text-center"
      role="status"
      aria-live="polite"
    >
      <div
        className="h-13 w-13 animate-spin rounded-full border-[5px] border-blue-600/15 border-t-blue-600"
        aria-hidden="true"
      />
      <p className="text-slate-700">Loading live weather for {city}...</p>
    </div>
  );
}

export default LoadingSpinner;
