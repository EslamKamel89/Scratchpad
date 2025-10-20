type SelectInputProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  options: string[];
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  required: boolean;
  error: string;
};
const SelectInput = ({
  id,
  name,
  label,
  value,
  options,
  onChange,
  error,
  required = false,
}: SelectInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="label">
        {label} {required ? "*" : "optional"}
      </label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="input"
      >
        {options.map((option) => {
          return (
            <option key={option} value={option.split(" ").reverse()[0]}>
              {option}
            </option>
          );
        })}
      </select>
      <p className="error">{error}</p>
    </div>
  );
};

export default SelectInput;
