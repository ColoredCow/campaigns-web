import * as yup from 'yup';

export const userValidationSchema = yup.object({
  name: yup.string().trim().required('Name is required'),
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassowrd: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});
