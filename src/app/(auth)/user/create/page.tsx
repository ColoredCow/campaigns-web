'use client';

import { UsersIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import { createUser } from '@/apis/user';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import User from '@/components/Forms/User';
import { userValidationSchema } from '@/validations/user';

const Page = () => {
  const router = useRouter();
  const onSubmit = async (values: any) => {
    try {
      await createUser(values);
      toast.success('User created successfully');
      router.back();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassowrd: '',
    },
    onSubmit: onSubmit,
    validationSchema: userValidationSchema,
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
        <User formik={formik} btnName="Create User" />
      </div>
    </>
  );
};

export default Page;
