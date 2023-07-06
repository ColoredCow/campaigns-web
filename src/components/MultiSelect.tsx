import Select from 'react-select';

const MultiSelect = ({
  label,
  options,
  placeholder,
  value,
  onChange,
  isSearchable,
}: {
  label: string;
  options: any;
  placeholder: string;
  value: any;
  onChange: any;
  isSearchable: boolean;
}) => {
  return (
    <>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Select
        options={options}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isSearchable={isSearchable}
        isMulti
      />
    </>
  );
};

export default MultiSelect;
