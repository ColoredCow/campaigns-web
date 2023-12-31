import Select from 'react-select';

const MultiSelect = ({
  field,
  form,
  options,
  placeholder,
  label,
}: {
  field: any;
  form: any;
  options: object[];
  placeholder: string;
  label: string;
}) => {
  function onChange(option: Array<any>) {
    form.setFieldValue(
      field.name,
      option ? option.map((item: object) => item) : []
    );
  }

  return (
    <>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        name={field.name}
        value={field.value}
        onChange={onChange}
        options={options}
        isMulti={true}
        placeholder={placeholder}
      />
    </>
  );
};

export default MultiSelect;
