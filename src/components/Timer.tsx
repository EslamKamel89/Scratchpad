const Timer = () => {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-slate-100 to-slate-200 text-slate-900 antialiased">
      <main className="grid min-h-dvh place-items-center p-6">
        <section className="w-full max-w-md">
          <div className="relative rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur sm:p-8">
            <header className="mb-6 flex items-center justify-between">
              <h1 className="text-xl font-semibold tracking-tight">Timer</h1>
              <span className="inline-flex items-center gap-2 text-xs text-slate-500">
                <span className="size-2 animate-pulse rounded-full bg-emerald-500"></span>
                Welcome Eslam
              </span>
            </header>

            <div className="mb-8">
              <p className="text-sm tracking-wide text-slate-500 uppercase">
                Elapsed
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span
                  aria-live="polite"
                  aria-atomic="true"
                  className="font-mono text-6xl leading-none tabular-nums sm:text-7xl"
                >
                  123
                </span>
                <span className="text-slate-500">sec</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-slate-800 active:translate-y-px"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M6.75 5.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V5.25Zm6 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V5.25Z" />
                </svg>
                <span>
                  Pause <span className="mx-1 opacity-40">/</span> Resume
                </span>
              </button>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-50 active:translate-y-px"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M8 5.143c0-1.27 1.374-2.058 2.476-1.366l7.455 4.71c1.046.661 1.046 2.07 0 2.732l-7.455 4.71C9.374 16.62 8 15.832 8 14.561V5.143Z" />
                </svg>
                <span>
                  Start <span className="mx-1 opacity-40">/</span> Stop
                </span>
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-slate-500">
              Work Hard Play Hard
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Timer;
