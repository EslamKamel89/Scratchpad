type TextAreaInputProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  required: boolean;
  error: string;
  placeholder: string;
};
const TextAreaInput = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
  required = false,
}: TextAreaInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="label">
        {label} {required ? "*" : "optional"}
      </label>
      <textarea
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="input"
        placeholder={placeholder}
      />
      <p className="error">{error}</p>
    </div>
  );
};

export default TextAreaInput;
