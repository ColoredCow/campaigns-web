'use client';

import { getUsers, deleteUser } from '@/apis/user';
import Table from '@/components/Table';
import { UserResource, TableData } from '@/utils/types';
import { useEffect, useState } from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { UsersIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { toast } from 'react-toastify';

const Page = () => {
  const [users, setUsers] = useState<UserResource | undefined>(undefined);

  const [tableData, setTableData] = useState<TableData>({
    headers: ['Name', 'Email'],
    rows: [],
  });

  const fetchUsers = async () => {
    setUsers(await getUsers());
  };

  useEffect(() => {
    fetchUsers();
    const showDeleteConfirmationModal = async (id: number) => {
      const result = confirm('Are you sure you want to delete this user?');
      if (result) {
        try {
          await deleteUser(id);
          toast.success('User deleted successfully');
          fetchUsers();
        } catch (error: any) {
          toast.error(error.response.data.message);
        }
      }
    };

    if (users) {
      const rows = users.data.map((user: any) => {
        return [
          <>
            <div>{user.name}</div>
          </>,
          <>
            <div>{user.email}</div>
          </>,
          <div className="flex justify-end">
            <Link
              href={{
                pathname: '/user/edit/',
                query: { id: user.id },
              }}
              className="text-gray-400 hover:text-indigo-700"
            >
              <PencilSquareIcon className="h-5 w-5" />
            </Link>
            <a
              type="button"
              onClick={() => showDeleteConfirmationModal(user.id)}
              className="ml-2 text-gray-400 hover:text-red-600"
            >
              <TrashIcon className="h-5 w-5" />
            </a>
          </div>,
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
          <Link
            className="flex rounded-lg bg-indigo-700 px-4 py-2 text-white hover:bg-indigo-800"
            href="/user/create"
          >
            Create user
          </Link>
        </div>
      </div>
      <Table data={tableData} />
    </div>
  );
};

export default Page;
