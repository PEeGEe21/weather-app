interface HeaderProps {
  currentCity: string;
  // isOnline: boolean;
  // canInstall: boolean;
  // isInstalled: boolean;
  // onInstall: () => Promise<void>;
}

function Header({
  currentCity,
  // isOnline,
  // canInstall,
  // isInstalled,
  // onInstall,
}: HeaderProps) {
  return (
    <header className="mb-7 grid gap-3.5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="w-fit rounded-full bg-cyan-900/10 px-3 py-1.5 text-[0.85rem] font-bold uppercase tracking-[0.08em] text-cyan-800">
          Project 03
        </p>
        {/* {canInstall && !isInstalled ? (
          <button
            className="rounded-full border border-cyan-900/12 bg-white/90 px-4 py-2 text-sm font-bold text-slate-900 shadow-[0_10px_24px_rgba(11,37,69,0.08)] transition duration-150 hover:-translate-y-px"
            type="button"
            onClick={() => void onInstall()}
          >
            Install app
          </button>
        ) : null} */}
      </div>
      <h1 className="m-0 max-w-[12ch] text-[clamp(2.7rem,7vw,4.8rem)] leading-[0.95] tracking-[-0.06em] text-slate-950">
        Weather that feels local, fast, and clear.
      </h1>
      <p className="max-w-[40rem] text-[1.05rem] text-slate-600">
        Start with Lagos, then search any city for live temperature, humidity,
        wind speed, and visibility in one responsive dashboard.
      </p>
      <div
        className="flex flex-wrap gap-2.5"
        aria-label="Weather app highlights"
      >
        <span className="rounded-full border border-cyan-900/12 bg-white/70 px-3.5 py-2.5 text-[0.95rem] text-slate-800">
          Default city: Lagos
        </span>
        <span className="rounded-full border border-cyan-900/12 bg-white/70 px-3.5 py-2.5 text-[0.95rem] text-slate-800">
          Live conditions
        </span>
        <span className="rounded-full border border-cyan-900/12 bg-white/70 px-3.5 py-2.5 text-[0.95rem] text-slate-800">
          Now viewing: {currentCity}
        </span>
        {/* <span className="rounded-full border border-cyan-900/12 bg-white/70 px-3.5 py-2.5 text-[0.95rem] text-slate-800">
          {isOnline ? "Status: online" : "Status: offline"}
        </span>
        <span className="rounded-full border border-cyan-900/12 bg-white/70 px-3.5 py-2.5 text-[0.95rem] text-slate-800">
          {isInstalled ? "Installed experience ready" : "PWA install enabled"}
        </span> */}
      </div>
    </header>
  );
}

export default Header;
