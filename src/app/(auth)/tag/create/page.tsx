'use client';

import { TagIcon } from '@heroicons/react/24/outline';
import { createTag } from '@/apis/tag';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import TagForm from '@/components/Tag/TagForm';

const Page = () => {
  const router = useRouter();
  const onSubmit = async (values: any) => {
    try {
      await createTag(values);
      toast.success('Tag created successfully');
      router.back();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <TagIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">New Tag</span>
        </h2>
      </div>
      <TagForm onSubmit={onSubmit} />
    </div>
  );
};

export default Page;
