import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Input = ({
  type,
  name,
  label,
  placeholder,
  helpText,
}: {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  helpText?: string;
}) => {
  return (
    <div className={`mb-4 flex flex-col`}>
      <Field
        name={name}
        type={type}
        label={label}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 autofill:bg-gray-50 focus:border-blue-500 focus:ring-blue-500"
        placeholder={placeholder}
      />
      <ErrorMessage
        className="text-sm font-semibold italic text-red-500"
        name={name}
        component="div"
      />
      {helpText && (
        <small className="ml-1 mt-1 text-gray-400">{helpText}</small>
      )}
    </div>
  );
};

export default Input;
