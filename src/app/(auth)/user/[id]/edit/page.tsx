'use client';

import { UsersIcon } from '@heroicons/react/24/outline';
import { getUser, updateUser } from '@/apis/user';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import UserForm from '@/components/User/UserForm';

const Page = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUser(params.id);
        setUser(data);
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    };
    fetchUser();
  }, []);

  const onSubmit = async (values: any) => {
    try {
      await updateUser(params.id, values);
      toast.success('User updated successfully');
      router.back();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <UsersIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">Edit User</span>
        </h2>
      </div>
      <UserForm onSubmit={onSubmit} user={user} />
    </>
  );
};

export default Page;
