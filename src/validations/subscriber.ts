import * as yup from 'yup';

export const subscriberValidationSchema = yup.object({
  name: yup.string().trim().required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
});
