'use client';

import Button from '@/components/Button';
import { AtSymbolIcon } from '@heroicons/react/24/outline';
import Input from '@/components/Input';
import { useFormik } from 'formik';
import { createSenderIndentity } from '@/apis/SenderIdentity';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const onSubmit = async (values: any) => {
    try {
      await createSenderIndentity(values);
      toast.success('Sender Identity created successfully');
      router.back();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
    },
    onSubmit: onSubmit,
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
      email: yup.string().required('Email is required'),
    }),
  });
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <AtSymbolIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">Create Sender Identity</span>
        </h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Enter Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            mandatoryField={!!formik.errors.name}
            errorMessage={formik.errors.name}
          />
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Enter Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            mandatoryField={!!formik.errors.email}
            errorMessage={formik.errors.email}
          />
        </div>
        <Button
          className="btn rounded-3 font-golas-600 fs-16 w-203 btn-curious-blue py-2 text-center text-white"
          type="submit"
        >
          Create
        </Button>
      </form>
    </div>
  );
};

export default Page;
