import { Pause, Play } from "lucide-react";

type ResumePauseButtonProps = {
  onClick: () => void;
  isRunning: boolean;
};
const ResumePauseButton = ({ onClick, isRunning }: ResumePauseButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn-accent disabled:cursor-not-allowed disabled:opacity-50"
    >
      {!isRunning && <Play />}
      {isRunning && <Pause />}
      <span>{isRunning ? "Pause" : "Resume"}</span>
    </button>
  );
};

export default ResumePauseButton;
