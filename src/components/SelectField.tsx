import React from 'react';
import { useField } from 'formik';
import Select from 'react-select';

const SelectField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const onChange = (value) => {
    helpers.setValue(value);
  };

  return (
    <Select
      {...props}
      name={name}
      value={field.value}
      onChange={onChange}
      onBlur={() => helpers.setTouched(true)}
    />
  );
};

export default SelectField;
