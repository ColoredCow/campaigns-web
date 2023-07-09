'use client';

import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useAuth } from '@/hooks/auth';

const Page = () => {
  const { login, isLoading, user } = useAuth({ middleware: 'guest' });

  const submitForm = async (values: any) => {
    const { email, password } = values;
    login({ email, password });
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: submitForm,
    validationSchema: validationSchema,
  });

  if (isLoading || user) {
    return null;
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col justify-center bg-gray-800 px-20 text-white">
        <h2 className="mb-6 text-5xl">Campaigns</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          delectus ea minus cumque tempore asperiores enim recusandae! Amet,
          perspiciatis dolores ullam minus aliquid voluptas esse doloremque
          fugiat ratione eveniet modi.
        </p>
      </div>
      <div className="flex flex-1 flex-col justify-center bg-slate-100 px-20">
        <h3 className="mb-6 text-2xl">Sign in</h3>
        <form onSubmit={formik.handleSubmit}>
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required={formik.errors.email}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            required={formik.errors.password}
          />
          <Button type="submit">Sign in</Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
