import { useState } from "react";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import Notes from "./components/Notes/Notes";
import Timer from "./components/Timer";

function App() {
  const [tab, setTab] = useState(0);
  return (
    <div className="mx-auto mt-10 max-w-lg rounded-lg bg-gray-100 p-6 shadow-lg">
      <div className="flex flex-row space-x-4">
        <button onClick={() => setTab(0)} className="btn">
          Notes
        </button>
        <button onClick={() => setTab(1)} className="btn">
          Life Cycle
        </button>
        <button onClick={() => setTab(2)} className="btn">
          Timer
        </button>
      </div>
      <div className="my-2 w-full border-b shadow-lg"></div>
      {tab === 0 && <Notes />}
      {tab === 1 && <LifeCycle />}
      {tab === 2 && <Timer />}
    </div>
  );
}

export default App;
