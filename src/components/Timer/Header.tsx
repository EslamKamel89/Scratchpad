const Header = () => {
  return (
    <header className="mb-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold tracking-tight">Timer</h1>
      <span className="inline-flex items-center gap-2 text-xs text-slate-500">
        <span className="size-2 animate-pulse rounded-full bg-emerald-500"></span>
        Welcome Eslam
      </span>
    </header>
  );
};

export default Header;
