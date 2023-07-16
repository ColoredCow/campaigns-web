const Select = ({
  options,
  onChange,
  className,
  name,
  label,
}: {
  options: [];
  onChange: any;
  className: string;
  name: string;
  label: string;
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
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
    </div>
  );
};

export default Select;
