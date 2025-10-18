import { useState, type ReactNode } from "react";

type NoteFormProps = {
  children?: ReactNode;
  notes: NoteFormData[];
  setNotes: (v: NoteFormData[]) => void;
};
export type NoteFormData = {
  id?: number;
  title: string;
  priority: string;
  category: string;
  description: string;
};
const NoteForm = ({ children, setNotes, notes }: NoteFormProps) => {
  const initFormData = {
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  };
  const initErrors = {
    title: "",
    priority: "",
    category: "",
    description: "",
  };
  const [formData, setFormData] = useState<NoteFormData>(initFormData);
  const [errors, setErrors] = useState<NoteFormData>(initErrors);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const key = e.target.name as keyof NoteFormData;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkErrors()) return;
    const newNote = { ...formData, id: Date.now() };
    setNotes([...notes, newNote]);
    setFormData(initFormData);
  };
  const checkErrors = () => {
    let isError = "";
    setErrors({
      title: (isError = formData.title ? "" : "title is required"),
      priority: (isError = formData.priority ? "" : "priority is required"),
      category: (isError = formData.category ? "" : "category is required"),
      description: (isError = formData.description
        ? ""
        : "description is required"),
    });
    return isError !== "";
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-4">
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          name="title"
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="input"
          placeholder="Enter title"
        />
        <p className="error">{errors.title}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="label">
          priority
        </label>
        <select
          name="priority"
          id="priority"
          value={formData.priority}
          onChange={handleChange}
          className="input"
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟠 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
        <p className="error">{errors.priority}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="label">
          Category
        </label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
          className="input"
        >
          <option value="Work">🏢 Work</option>
          <option value="Personal">🧑‍🦱 Personal</option>
          <option value="Ideas">🧠 Ideas</option>
        </select>
        <p className="error">{errors.category}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="label">
          description
        </label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="input"
          placeholder="Enter description"
        />
        <p className="error">{errors.description}</p>
      </div>
      <button className="btn">Save</button>
    </form>
  );
};

export default NoteForm;
