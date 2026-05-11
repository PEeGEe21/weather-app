interface HeaderProps {
  currentCity: string;
}

function Header({ currentCity }: HeaderProps) {
  return (
    <header className="mb-7 grid gap-3.5">
      <p className="w-fit rounded-full bg-cyan-900/10 px-3 py-1.5 text-[0.85rem] font-bold uppercase tracking-[0.08em] text-cyan-800">
        Project 03
      </p>
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
      </div>
    </header>
  );
}

export default Header;
