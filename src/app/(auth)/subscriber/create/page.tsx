'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiSelect from '@/components/MultiSelect';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { createSubscriber, getTags } from '@/apis/subscriber';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { subscriberSchema } from '@/validations/subscriber';

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
    validationSchema: subscriberSchema,
  });

  return (
    <>
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <UserGroupIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">New Subscriber</span>
        </h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Enter Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required={formik.errors.email}
          />
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Enter Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            required={formik.errors.name}
          />
          <Input
            type="tel"
            name="phone"
            label="Phone"
            placeholder="Enter Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            optional={true}
          />
          <div>
            <MultiSelect
              options={tagsList}
              placeholder="Select Tags"
              value={selectedOptions}
              onChange={handleTagSelection}
              isSearchable={true}
              label="Select List"
            />
          </div>
        </div>
        <Button type="submit">Create</Button>
      </form>
    </>
  );
};

export default Page;
