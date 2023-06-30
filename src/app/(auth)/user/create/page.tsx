'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { UsersIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createUser } from '@/apis/user';

const Page = () => {
  const onSubmit = async (values: any) => {
    await createUser(values);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassowrd: '',
    },
    onSubmit: onSubmit,
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
      email: yup.string().required('Email is required'),
      password: yup.string().required('Password is required'),
      confirmPassowrd: yup
        .string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('password')], 'Passwords do not match'),
    }),
  });

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2 className="mb-7 flex items-end">
            <UsersIcon className="h-9 w-9" />
            <span className="ml-1 text-3xl">Create user</span>
          </h2>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <Input
              type="text"
              name="name"
              label="Name"
              placeholder="Enter Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              mandatoryField={!!formik.errors.name}
              errorMessage={formik.errors.name}
            />
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Enter Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              mandatoryField={!!formik.errors.email}
              errorMessage={formik.errors.email}
            />
            <Input
              type="text"
              name="password"
              label="Password"
              placeholder="Enter Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              mandatoryField={!!formik.errors.password}
              errorMessage={formik.errors.password}
            />
            <Input
              type="text"
              name="confirmPassowrd"
              label="Confirm Password"
              placeholder="Enter Confirm Password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassowrd}
              mandatoryField={!!formik.errors.confirmPassowrd}
              errorMessage={formik.errors.confirmPassowrd}
            />
          </div>
          <Button
            className="btn rounded-3 font-golas-600 fs-16 w-203 btn-curious-blue py-2 text-center text-white"
            type="submit"
          >
            Create User
          </Button>
        </form>
      </div>
    </>
  );
};

export default Page;
