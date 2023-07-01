'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { createSubscribers, getTagList } from '@/apis/subscriber';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [tags, setTags] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState();

  const onSubmit = async (values: any) => {
    values.tags = selectedOptions.map(
      (selectedOption: { value: any }) => selectedOption.value
    );
    try {
      await createSubscribers(values);
      toast.success('Subscriber created successfully');
      router.back();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchTagLists = async () => {
      setTags(await getTagList());
    };
    fetchTagLists();
  }, []);

  function handleSelect(data: any) {
    setSelectedOptions(data);
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
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
      email: yup.string().required('Email is required'),
    }),
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
            mandatoryField={!!formik.errors.email}
            errorMessage={formik.errors.email}
          />
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
            type="tel"
            name="phone"
            label="Phone"
            placeholder="Enter Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            optional={true}
          />
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Select List
            </label>
            <Select
              options={tagsList}
              placeholder="Select Tags"
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
              isMulti
            />
          </div>
        </div>
        <Button
          className="btn rounded-3 font-golas-600 fs-16 w-203 btn-curious-blue py-2 text-center text-white"
          type="submit"
        >
          Create
        </Button>
      </form>
    </>
  );
};

export default Page;
