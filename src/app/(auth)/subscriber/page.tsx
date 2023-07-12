'use client';

import Button from '@/components/Button';
import { getSubscribers } from '@/apis/subscriber';
import Input from '@/components/Input';
import Table from '@/components/Table';
import { useEffect, useState } from 'react';
import { Subscribers, TableData } from '@/utils/types';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';

const Page = () => {
  const [subscribers, setSubscribers] = useState<Subscribers | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchSubscribers = async () => {
      setSubscribers(await getSubscribers());
    };
    fetchSubscribers();
  }, []);

  const [tableData, setTableData] = useState<TableData>({
    headers: ['Details', 'List'],
    rows: [],
  });

  useEffect(() => {
    if (subscribers) {
      const rows = subscribers.data.map((subscriber: Subscribers) => {
        return [
          <>
            <div>{subscriber.email}</div>
            <div>{subscriber.name}</div>
            {/* <div className="text-gray-500">{campaign.tag.name}</div> */}
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
              <a href="#" className="text-gray-400 hover:text-indigo-700">
                <PencilSquareIcon className="h-5 w-5" />
              </a>
              <a href="#" className="ml-2 text-gray-400 hover:text-red-600">
                <TrashIcon className="h-5 w-5" />
              </a>
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
          <Button
            className="mr-2"
            onClick={() => console.log('new subscriber')}
          >
            New Subscriber
          </Button>
          <Button onClick={() => console.log('bulk upload')}>
            Bulk upload
          </Button>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <Input label="" type="text" placeholder="Search" name="search" />
        </div>
        <div className="flex">
          <Input label="" type="text" placeholder="Search" name="search" />
          <Button
            className="ml-2 mt-1"
            onClick={() => console.log('Filter applied')}
          >
            Filter
          </Button>
        </div>
      </div>
      <Table data={tableData} />
    </div>
  );
};

export default Page;
