import React from "react";
import type { NoteFormData } from "./NoteForm";

interface NoteCardProps {
  note: NoteFormData;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const { title, priority, category, description } = note;

  const priorityColor = {
    low: "bg-purple-100 text-purple-700 border-purple-300",
    medium: "bg-purple-200 text-purple-800 border-purple-400",
    high: "bg-purple-300 text-purple-900 border-purple-500",
  }[priority];

  return (
    <div
      className={`my-2 w-full rounded-2xl border bg-white p-5 shadow-md transition-shadow duration-200 hover:shadow-lg`}
    >
      <div className="mb-3 flex items-center justify-between">
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
