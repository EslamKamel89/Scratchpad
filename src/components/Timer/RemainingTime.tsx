const RemainingTime: React.FC<{ time: number }> = ({ time }) => {
  return (
    <div className="mb-8">
      <p className="text-sm tracking-wide text-slate-500 uppercase">Elapsed</p>
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
  );
};

export default RemainingTime;
