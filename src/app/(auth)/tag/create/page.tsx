'use client';

import { TagIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import { createTag } from '@/apis/tag';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Tag from '@/components/Forms/Tag';
import { tagValidationSchema } from '@/validations/tag';

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
    validationSchema: tagValidationSchema,
  });

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <TagIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">New Tag</span>
        </h2>
      </div>
      <Tag formik={formik} btnName="Create" />
    </div>
  );
};

export default Page;
