import { useState } from "react";
import NoteCard from "./components/Card";
import Header from "./components/Header";
import NoteForm, { type NoteFormData } from "./components/NoteForm";

function App() {
  const [notes, setNotes] = useState<NoteFormData[]>([]);
  const deleteNote = (note: NoteFormData) => {
    const confirm = window.confirm("Are you sure you want to delete this note");
    if (!confirm) return;
    setNotes(notes.filter((n) => n.id !== note.id));
  };
  return (
    <div className="mx-auto mt-10 max-w-lg rounded-lg bg-gray-100 p-6 shadow-lg">
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

export default App;
