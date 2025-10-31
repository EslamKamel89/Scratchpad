import { CirclePlay, Pause, Play, Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const timer = useRef<number>(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const toggleStart = () => {
    setIsStarted((prevState) => {
      const newState = !prevState;
      setIsRunning(newState);
      return newState;
    });
  };
  const toggleRunning = () => {
    if (isRunning && !isStarted) {
      throw new DOMException(
        "You can't have both the isRunning = true and isStarted = false",
      );
    }
    setIsRunning(!isRunning);
  };
  useEffect(() => {
    if (!isRunning) {
      if (timer.current) clearInterval(timer.current);
    } else {
      timer.current = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [isRunning]);
  useEffect(() => {
    setTime(0);
  }, [isStarted]);
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
                  {time}
                </span>
                <span className="text-slate-500">sec</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {isStarted && (
                <button
                  type="button"
                  onClick={() => toggleRunning()}
                  className="btn-accent disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {!isRunning && <Play />}
                  {isRunning && <Pause />}
                  <span>{isRunning ? "Pause" : "Resume"}</span>
                </button>
              )}

              <button
                onClick={() => toggleStart()}
                type="button"
                className="btn-outline"
              >
                {!isStarted && <CirclePlay />}
                {isStarted && <Square />}
                <span>{isStarted ? "Stop " : " Start"}</span>
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
