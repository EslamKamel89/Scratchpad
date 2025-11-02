const TimerContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-slate-100 to-slate-200 text-slate-900 antialiased">
      <main className="grid min-h-dvh place-items-center p-6">
        <section className="w-full max-w-md">
          <div className="relative rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur sm:p-8">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TimerContainer;
