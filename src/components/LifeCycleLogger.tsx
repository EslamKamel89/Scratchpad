import { useState } from "react";

type LifeCycleLoggerProps = {
  message: string;
};
const LifeCycleLogger = ({ message }: LifeCycleLoggerProps) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="my-4 flex h-44 w-full items-center justify-center rounded-2xl bg-purple-950 text-white">
      <div>
        <div>{message}</div>
        <button className="btn" onClick={() => incrementCount()}>
          + ({count})
        </button>
      </div>
    </div>
  );
};

export default LifeCycleLogger;
