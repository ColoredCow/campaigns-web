'use client';

import { getUsers } from '@/apis/user';
import Table from '@/components/Table';
import Button from '@/components/Button';
import { Users, TableData } from '@/utils/types';
import { useEffect, useState } from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { UsersIcon } from '@heroicons/react/24/outline';
// import Input from '@/components/Input';

const Page = () => {
  const [users, setUsers] = useState<Users | undefined>(undefined);

  const [tableData, setTableData] = useState<TableData>({
    headers: ['Name', 'Email'],
    rows: [],
  });

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUsers());
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users) {
      const rows = users.data.map((user: Users) => {
        return [
          <>
            <div>{user.name}</div>
            {/* <div className="text-gray-500">{campaign.tag.name}</div> */}
          </>,
          <>
            <div>{user.email}</div>
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
  }, [users]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <UsersIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">Users</span>
          {users && (
            <span className="ml-1 text-2xl font-light text-gray-500">
              ({users.total})
            </span>
          )}
        </h2>
        <div>
          <Button onClick={() => console.log('new campaign')}>
            Create user
          </Button>
        </div>
      </div>
      <Table data={tableData} />
    </div>
  );
};

export default Page;
