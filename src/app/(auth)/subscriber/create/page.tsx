'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { createSubscribers, getTagList } from '@/apis/subscriber';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Select from '@/components/Select';
import { useEffect, useState } from 'react';
import { Tag } from '@/utils/types';

const Page = () => {
  const [tags, setTags] = useState([]);

  const onSubmit = async (values: any) => {
    await createSubscribers(values);
  };

  useEffect(() => {
    const fetchTagLists = async () => {
      setTags(await getTagList());
    };
    fetchTagLists();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      tag: '',
    },
    onSubmit: onSubmit,
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
      email: yup.string().required('Email is required'),
    }),
  });

  return (
    <>
      {console.log(tags.data, '-->tags')}
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
          />
        </div>
        <Select
          options={tags.data || []}
          value={formik.values.tag}
          onChange={formik.handleChange}
          name="tag"
          label="Select lists"
        />
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
