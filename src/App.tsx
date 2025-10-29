import { FileText, RefreshCw, Timer as TimerIcon } from "lucide-react";
import { useState } from "react";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import Notes from "./components/Notes/Notes";
import Timer from "./components/Timer";

export default function App() {
  const [tab, setTab] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      <div className="mx-auto max-w-2xl px-4 py-10">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <header className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
            <h1 className="text-lg font-semibold tracking-tight">
              My Playground
            </h1>
            <span className="text-xs text-slate-500">React • Tailwind</span>
          </header>

          {/* Tabs */}
          <div className="px-3 pt-3">
            <div
              role="tablist"
              aria-label="Sections"
              className="flex items-center gap-2 rounded-xl bg-slate-100 p-1"
            >
              <button
                role="tab"
                onClick={() => setTab(0)}
                className={`group w-full rounded-lg px-4 py-2 text-sm font-medium transition focus:ring-2 focus:ring-slate-400/60 focus:ring-offset-2 focus:ring-offset-white focus:outline-none ${
                  tab === 0
                    ? "bg-white shadow-sm ring-1 ring-slate-200"
                    : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <FileText className="h-4 w-4 opacity-70" />
                  Notes
                </span>
              </button>

              <button
                role="tab"
                onClick={() => setTab(1)}
                className={`group w-full rounded-lg px-4 py-2 text-sm font-medium transition focus:ring-2 focus:ring-slate-400/60 focus:ring-offset-2 focus:ring-offset-white focus:outline-none ${
                  tab === 1
                    ? "bg-white shadow-sm ring-1 ring-slate-200"
                    : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 opacity-70" />
                  Life Cycle
                </span>
              </button>

              <button
                role="tab"
                onClick={() => setTab(2)}
                className={`group w-full rounded-lg px-4 py-2 text-sm font-medium transition focus:ring-2 focus:ring-slate-400/60 focus:ring-offset-2 focus:ring-offset-white focus:outline-none ${
                  tab === 2
                    ? "bg-white shadow-sm ring-1 ring-slate-200"
                    : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <TimerIcon className="h-4 w-4 opacity-70" />
                  Timer
                </span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-6 my-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* Content */}
          <section className="px-6 pb-8">
            {tab === 0 && (
              <div className="animate-in fade-in duration-200">
                <Notes />
              </div>
            )}
            {tab === 1 && (
              <div className="animate-in fade-in duration-200">
                <LifeCycle />
              </div>
            )}
            {tab === 2 && (
              <div className="animate-in fade-in duration-200">
                <Timer />
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
