'use client';

import SubscriberForm from '@/components/Subscriber/SubscriberForm';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { createSubscriber } from '@/apis/subscriber';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { extractValuesFromOptions } from '@/utils/common';

const Page = () => {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSubmit = async (values: any) => {
    values.tags = extractValuesFromOptions(selectedOptions);
    try {
      await createSubscriber(values);
      toast.success('Subscriber created successfully');
      router.back();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <UserGroupIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">New Subscriber</span>
        </h2>
      </div>
      <SubscriberForm
        onSubmit={onSubmit}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
    </>
  );
};

export default Page;
