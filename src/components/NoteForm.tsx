import { useState, type ReactNode } from "react";
import SelectInput from "./Inputs/SelectInput";
import TextInput from "./Inputs/TextInput";

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
  const [isVisible, setIsVisible] = useState<boolean>(false);
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
    setIsVisible(false);
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
    <>
      <button
        type="button"
        className="btn my-4"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide Form ❌" : "Add Note ➕"}
      </button>
      {isVisible && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextInput
            label="title"
            name="title"
            type="text"
            id="title"
            required={true}
            error={errors.title}
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
          <SelectInput
            label="Priority"
            id="priority"
            value={formData.priority}
            onChange={handleChange}
            options={["🔴 High", "🟠 Medium", "🟢 Low"]}
            required={true}
            name="priority"
            error={errors.priority}
          />
          <SelectInput
            label="Category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            options={["🏢 Work", "🧑‍🦱 Personal", "🧠 Ideas"]}
            required={true}
            name="category"
            error={errors.category}
          />

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
      )}
    </>
  );
};

export default NoteForm;
