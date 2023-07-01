'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { TagIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createTag } from '@/apis/tag';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const onSubmit = async (values: any) => {
    try {
      await createTag(values);
      toast.success('Tag created successfully');
      router.back();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: onSubmit,
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
    }),
  });

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <TagIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">New Tag</span>
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
