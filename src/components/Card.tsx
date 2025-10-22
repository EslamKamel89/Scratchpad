import { Trash2 } from "lucide-react";
import React from "react";
import type { NoteFormData } from "./NoteForm";

interface NoteCardProps {
  note: NoteFormData;
  onDelete: (n: NoteFormData) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
  const { title, priority, category, description } = note;

  const priorityColor = {
    low: "bg-green-100 text-green-700 border-green-300",
    medium: "bg-orange-200 text-orange-800 border-orange-400",
    high: "bg-red-300 text-red-900 border-red-500",
  }[priority.toLowerCase()];
  const borderColor = {
    low: "border-green-300 shadow-lg shadow-green-500",
    medium: "border-orange-400 shadow-lg shadow-orange-500",
    high: "border-red-500 shadow-lg shadow-red-500",
  }[priority.toLowerCase()];
  return (
    <div
      className={`relative my-2 w-full rounded-2xl border bg-white p-5 shadow-md transition-shadow duration-200 hover:shadow-lg ${borderColor}`}
    >
      <button
        onClick={() => onDelete(note)}
        type="button"
        className="absolute top-4 right-4 rounded-full bg-purple-50 p-2 text-purple-500 shadow-sm transition-all duration-200 hover:bg-purple-100 hover:text-purple-700 hover:shadow-md"
        aria-label="Delete note"
      >
        <Trash2 className="h-4 w-4" />
      </button>

      <div className="mb-3 flex items-center justify-between pr-10">
        <h2 className="text-xl font-semibold text-purple-800">{title}</h2>
        <span
          className={`rounded-full border px-3 py-1 text-sm font-medium ${priorityColor}`}
        >
          {priority.toUpperCase()}
        </span>
      </div>

      <p className="mb-2 text-sm font-medium text-purple-500">
        #{category.toUpperCase()}
      </p>

      <p className="text-sm leading-relaxed text-gray-700">{description}</p>
    </div>
  );
};

export default NoteCard;
