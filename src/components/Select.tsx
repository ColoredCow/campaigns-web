const Select = ({
  options,
  value,
  onChange,
  className,
  name,
  label,
  required,
}: {
  options: [];
  value: any;
  onChange: any;
  className?: string;
  name: string;
  label: string;
  required?: string;
}) => {
  return (
    <div className={`mb-4 flex flex-col ${className}`}>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        name={name}
        onChange={onChange}
        id={name}
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option selected>Choose List</option>
        {Array.isArray(options) &&
          options.length > 0 &&
          options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
      </select>
      {required && (
        <div className="text-sm font-semibold italic text-red-500">
          {required}
        </div>
      )}
    </div>
  );
};

export default Select;
