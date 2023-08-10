import * as yup from 'yup';

export const tagValidationSchema = yup.object({
  name: yup.string().trim().required('Name is required'),
});
