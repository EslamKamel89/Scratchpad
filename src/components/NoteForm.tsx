import { useState, type ReactNode } from "react";

type NoteFormProps = {
  children?: ReactNode;
};
const NoteForm = ({ children }: NoteFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState<string>("Medium");
  const [category, setCategory] = useState<string>("Work");
  const [description, setDescription] = useState("");
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          placeholder="Enter title"
        />
        <p className="error">The title is required</p>
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="label">
          priority
        </label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="input"
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟠 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
        <p className="error">The Priority is required</p>
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="label">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input"
        >
          <option value="Work">🏢 Work</option>
          <option value="Personal">🧑‍🦱 Personal</option>
          <option value="Ideas">🧠 Ideas</option>
        </select>
        <p className="error">The Category is required</p>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="label">
          description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
          placeholder="Enter description"
        />
        <p className="error">The description is required</p>
      </div>
      <button className="btn">Save</button>
    </form>
  );
};

export default NoteForm;
