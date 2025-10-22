import { useState } from "react";

const LifeCycle = () => {
  const [showLogger, setShowLogger] = useState(false);
  return (
    <div>
      <h2 className="my-3 text-center text-2xl font-bold">
        React Life Cycle Playground
      </h2>
      <button onClick={() => setShowLogger(!showLogger)} className="btn">
        {showLogger ? "Unmount logger" : "Mount logger"}
      </button>
      {showLogger && (
        <div className="my-4 flex h-44 w-full items-center justify-center rounded-2xl bg-purple-950 text-white">
          <div>Logger</div>
        </div>
      )}
    </div>
  );
};

export default LifeCycle;
