const Input = ({
  type,
  name,
  label,
  placeholder,
  helpText,
  disabled,
}: {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  helpText?: string;
  disabled?: boolean;
}) => {
  return (
    <div className="mb-4 flex flex-col">
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 autofill:bg-gray-50 focus:border-blue-500 focus:ring-blue-500"
        placeholder={placeholder}
        required
      />
      {helpText && (
        <small className="ml-1 mt-1 text-gray-400">{helpText}</small>
      )}
    </div>
  );
};

export default Input;
