'use client';

import SubscriberForm from '@/components/Subscriber/SubscriberForm';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { updateSubscriber, getSubscriber } from '@/apis/subscriber';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from 'next/navigation';
import { extractValuesFromOptions } from '@/utils/common';

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const router = useRouter();
  const [subscriber, setSubscriber] = useState({});

  useEffect(() => {
    const fetchSubscriber = async () => {
      try {
        const { data } = await getSubscriber(id);
        setSubscriber(data);
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    };
    fetchSubscriber();
  }, []);

  const onSubmit = async (values: any) => {
    values.tags = extractValuesFromOptions(values.tags);
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
      <SubscriberForm onSubmit={onSubmit} subscriber={subscriber} />
    </>
  );
};

export default Page;
