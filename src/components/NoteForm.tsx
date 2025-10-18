import { useState, type ReactNode } from "react";

type NoteFormProps = {
  children?: ReactNode;
};
type NoteFormData = {
  title: string;
  priority: string;
  category: string;
  description: string;
};
const NoteForm = ({ children }: NoteFormProps) => {
  const [formData, setFormData] = useState<NoteFormData>({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const key = e.target.name as keyof NoteFormData;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };
  return (
    <form>
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
        <p className="error">The title is required</p>
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
        <p className="error">The Priority is required</p>
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
        <p className="error">The Category is required</p>
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
        <p className="error">The description is required</p>
      </div>
      <button className="btn">Save</button>
    </form>
  );
};

export default NoteForm;
