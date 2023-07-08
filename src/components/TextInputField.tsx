import React from 'react';
import { Field, ErrorMessage } from 'formik';

type TextInputFieldProps = {
  label?: string;
  name: string;
  type: string;
  placeholder: string;
  touched?: boolean;
  errors?: boolean;
  labelClass?: string;
  fieldClass?: string;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  containerClass?: string;
};

const TextInputField = ({
  label,
  name,
  type,
  placeholder,
  touched,
  errors,
  helperText,
  containerClass = 'mb-3',
  labelClass = 'form-label',
  fieldClass = 'form-control bg-transparent h-50 fs-16 font-golas-500 text-silver-chalice',
  rows = 1,
  ...rest
}: TextInputFieldProps) => {
  const hasError = touched && errors;
  return (
    <div className={containerClass}>
      {label && (
        <label className={labelClass} htmlFor={name}>
          {label}
        </label>
      )}
      <Field
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        {...rest}
        className={`${fieldClass} ${hasError ? 'is-invalid' : ''}`}
      />
      <ErrorMessage className="invalid-feedback" component="div" name={name} />
      {helperText && (
        <h3 className="fs-12 font-glos-500 text-silver-chalice mt-1.66 lh-1">
          {helperText}
        </h3>
      )}
    </div>
  );
};

export default TextInputField;
