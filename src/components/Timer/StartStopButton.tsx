import { CirclePlay, Square } from "lucide-react";

type StartStopButtonProps = {
  onClick: () => void;
  isStarted: boolean;
};
const StartStopButton = ({ onClick, isStarted }: StartStopButtonProps) => {
  return (
    <button onClick={onClick} type="button" className="btn-outline">
      {!isStarted && <CirclePlay />}
      {isStarted && <Square />}
      <span>{isStarted ? "Stop " : " Start"}</span>
    </button>
  );
};

export default StartStopButton;
