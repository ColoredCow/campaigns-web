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
  const [tags, setTags] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSubmit = async (values: any) => {
    if (selectedOptions.length > 0) {
      values.tags = selectedOptions.map(
        (selectedOption: { value: any }) => selectedOption.value
      );
    }
    try {
      await createSubscriber(values);
      toast.success('Subscriber created successfully');
      router.back();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchTagLists = async () => {
      setTags(await getTags());
    };
    fetchTagLists();
  }, []);

  function handleTagSelection(data: any) {
    if (data.length > 0) {
      setSelectedOptions(data);
    }
  }

  const tagsList =
    Array.isArray(tags.data) && tags.data.length > 0
      ? tags.data.map((tag: any) => ({
          value: tag.id,
          label: tag.name,
        }))
      : [];

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
          <span className="ml-1 text-3xl">New Subscriber</span>
        </h2>
      </div>
      <Subscriber
        formik={formik}
        MultiSelectedOptions={selectedOptions}
        tagsList={tagsList}
        handleTagSelection={handleTagSelection}
        btnName="Create"
      />
    </>
  );
};

export default Page;
