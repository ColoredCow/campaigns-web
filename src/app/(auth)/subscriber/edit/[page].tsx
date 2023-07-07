'use client';

import Subscriber from '@/components/Forms/Subscriber';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { createSubscriber, getTags } from '@/apis/subscriber';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { subscriberValidationSchema } from '@/validations/subscriber';

const Page = () => {
  const router = useRouter();

  const onSubmit = async (values: any) => {
    if (selectedOptions.length > 0) {
      values.tags = selectedOptions.map(
        (selectedOption: { value: any }) => selectedOption.value
      );
    }
    try {
      await createSubscriber(values);
      toast.success('Subscriber updated successfully');
      router.back();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
    },
    onSubmit: onSubmit,
    validationSchema: subscriberValidationSchema,
  });

  return (
    <>
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <UserGroupIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">Edit Subscriber</span>
        </h2>
      </div>
      {/* <Subscriber
        formik={formik}
        btnName="Update Subscriber"
        MultiSelectedOptions={undefined}
        handleTagSelection={undefined}
        tagsList={undefined}
      /> */}
    </>
  );
};

export default Page;
