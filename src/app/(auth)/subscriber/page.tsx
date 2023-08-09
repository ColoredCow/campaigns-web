'use client';

import Button from '@/components/Button';
import { getSubscribers, deleteSubscriber } from '@/apis/subscriber';
import Table from '@/components/Table';
import { useEffect, useState } from 'react';
import { SubscriberResource, TableData } from '@/utils/types';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { Subscriber } from '@/utils/types';

const Page = () => {
  const [subscribers, setSubscribers] = useState<
    SubscriberResource | undefined
  >(undefined);

  const fetchSubscribers = async () => {
    setSubscribers(await getSubscribers());
  };

  const [tableData, setTableData] = useState<TableData>({
    headers: ['Details', 'List'],
    rows: [],
  });

  useEffect(() => {
    fetchSubscribers();
    const showDeleteConfirmationModal = async (id: number) => {
      const result = confirm(
        'Are you sure you want to delete this subscriber?'
      );
      if (result) {
        try {
          await deleteSubscriber(id);
          toast.success('Subscriber deleted successfully');
          fetchSubscribers();
        } catch (error: any) {
          toast.error(error.response.data.message);
        }
      }
    };
    if (subscribers) {
      const rows = subscribers.data.map((subscriber: Subscriber) => {
        return [
          <>
            <div>{subscriber.email}</div>
            <div>{subscriber.name}</div>
          </>,
          <>
            <div>{subscriber.designation}</div>
            <div className="text-gray-500">{subscriber.address}</div>
          </>,
          <>
            <div className="text-gray-500">{/* {subscriber.comments} */}</div>
          </>,
          <>
            <div className="flex justify-end">
              <Link
                href={{
                  pathname: `/subscriber/${subscriber.id}/edit`,
                }}
                className="text-gray-400 hover:text-indigo-700"
              >
                <PencilSquareIcon className="h-5 w-5" />
              </Link>
              <span
                onClick={() => showDeleteConfirmationModal(subscriber.id)}
                className="text-gray-400 hover:text-indigo-700"
              >
                <TrashIcon className="h-5 w-5" />
              </span>
            </div>
          </>,
        ];
      });
      setTableData((data) => ({
        ...data,
        rows,
      }));
    }
  }, [subscribers]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <UserGroupIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">Subscribers</span>
          {subscribers && (
            <span className="ml-1 text-2xl font-light text-gray-500">
              ({subscribers.total})
            </span>
          )}
        </h2>
        <div className="flex">
          <div className="mr-2">
            <Link
              type="button"
              className="flex rounded-lg bg-indigo-700 px-4 py-2 text-white hover:bg-indigo-800"
              href="/subscriber/create"
            >
              New Subscriber
            </Link>
          </div>
          <Button onClick={() => console.log('bulk upload')}>
            Bulk upload
          </Button>
        </div>
      </div>
      <Table data={tableData} />
    </div>
  );
};

export default Page;
