const Input = ({
  type,
  name,
  label,
  placeholder,
  helpText,
  disabled,
  value,
  onChange,
  required,
  optional = false,
}: {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  helpText?: string;
  disabled?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: string;
  optional?: boolean;
}) => {
  return (
    <div className={`mb-4 flex flex-col`}>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
        {optional && <span className="text-gray-400"> (Optional)</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 autofill:bg-gray-50 focus:border-blue-500 focus:ring-blue-500 ${
          required && 'border-1 border-rose-600 bg-red-50'
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {required && (
        <div className="text-sm font-semibold italic text-red-500">
          {required}
        </div>
      )}
      {helpText && (
        <small className="ml-1 mt-1 text-gray-400">{helpText}</small>
      )}
    </div>
  );
};

export default Input;
