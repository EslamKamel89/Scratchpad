import { useEffect, useState } from "react";
import NoteCard from "./Card";
import Header from "./Header";
import type { NoteFormData } from "./NoteForm";
import NoteForm from "./NoteForm";
function Notes() {
  const [notes, setNotes] = useState<NoteFormData[]>(() => {
    return JSON.parse(localStorage.getItem("notes") ?? "[]");
  });
  useEffect(() => {
    console.log("Component mounted..........");
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log("Component notes updated........");
  }, [notes]);
  const deleteNote = (note: NoteFormData) => {
    const confirm = window.confirm("Are you sure you want to delete this note");
    if (!confirm) return;
    setNotes(notes.filter((n) => n.id !== note.id));
  };
  return (
    <div className="">
      <Header>Scratch Pad 🖋️</Header>
      <NoteForm notes={notes} setNotes={setNotes} />
      <ul>
        {notes.map((n) => (
          <li className="flex flex-col space-y-4" key={`${n.id}`}>
            <NoteCard note={n} onDelete={deleteNote} />
          </li>
        ))}
        {!notes.length && (
          <p className="my-5 w-full text-center text-sm text-gray-500">
            No notes added yet
          </p>
        )}
      </ul>
    </div>
  );
}

export default Notes;
