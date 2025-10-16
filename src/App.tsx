import Header from "./components/Header";
import NoteForm from "./components/NoteForm";

function App() {
  return (
    <div className="mx-auto mt-10 max-w-lg rounded-lg bg-gray-100 p-6 shadow-lg">
      <Header>Scratch Pad 🖋️</Header>
      <NoteForm />
    </div>
  );
}

export default App;
