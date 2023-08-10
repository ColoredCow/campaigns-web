'use client';

import { TagIcon } from '@heroicons/react/24/outline';
import { getTag, updateTag } from '@/apis/tag';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import TagForm from '@/components/Tag/TagForm';

const Page = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const [tag, setTag] = useState({});

  useEffect(() => {
    const fetchTag = async () => {
      try {
        const { data } = await getTag(params.id);
        setTag(data);
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    };
    fetchTag();
  }, []);

  const onSubmit = async (values: any) => {
    try {
      await updateTag(params.id, values);
      toast.success('Tag updated successfully');
      router.back();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <TagIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">Edit Tag</span>
        </h2>
      </div>
      <TagForm onSubmit={onSubmit} tag={tag} />
    </>
  );
};

export default Page;
