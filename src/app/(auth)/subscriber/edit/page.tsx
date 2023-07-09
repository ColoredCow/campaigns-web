'use client';

import Subscriber from '@/components/Subscriber/Subscriber';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { updateSubscriber, getSubscriber } from '@/apis/subscriber';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [subscriber, setSubscriber] = useState({});

  useEffect(() => {
    const fetchSubscriber = async () => {
      try {
        const { data } = await getSubscriber(id);
        setSelectedOptions(
          data.tags.map((tag: { name: any; _id: any }) => {
            return { value: tag._id, label: tag.name };
          })
        );
        setSubscriber(data);
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    };
    fetchSubscriber();
  }, []);

  const onSubmit = async (values: any) => {
    if (selectedOptions.length > 0) {
      values.tags = selectedOptions.map(
        (selectedOption: { value: any }) => selectedOption.value
      );
    }
    try {
      await updateSubscriber(id, values);
      toast.success('Subscriber updated successfully');
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
          <span className="ml-1 text-3xl">Edit Subscriber</span>
        </h2>
      </div>
      <Subscriber
        onSubmit={onSubmit}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        subscriber={subscriber}
      />
    </>
  );
};

export default Page;
