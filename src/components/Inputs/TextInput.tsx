type TextInputProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  type: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  required: boolean;
  error: string;
  placeholder: string;
};
const TextInput = ({
  id,
  name,
  label,
  value,
  type,
  onChange,
  error,
  placeholder,
  required = false,
}: TextInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="label">
        {label} {required ? "*" : "optional"}
      </label>
      <input
        name={name}
        type={type}
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

export default TextInput;
