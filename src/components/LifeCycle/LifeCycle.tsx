import { useState } from "react";
import LifeCycleLogger from "../LifeCycleLogger";

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
      {showLogger && <LifeCycleLogger message="Logger (class component)" />}
    </div>
  );
};

export default LifeCycle;
