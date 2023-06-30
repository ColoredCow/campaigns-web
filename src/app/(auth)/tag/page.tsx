'use client';

import { getTags } from '@/apis/tag';
import Input from '@/components/Input';
import Table from '@/components/Table';
import { Tag, TableData } from '@/utils/types';
import { TagIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Page = () => {
  const [tags, setTags] = useState<Tag | undefined>(undefined);
  const [tableData, setTableData] = useState<TableData>({
    headers: ['Name', 'Valid Subscribers', 'Invalid Subscribers'],
    rows: [],
  });

  useEffect(() => {
    const fetchTags = async () => {
      setTags(await getTags());
    };
    fetchTags();
  }, []);

  useEffect(() => {
    if (tags) {
      const rows = tags.data.map((tag: Tag) => {
        return [
          <>
            <div>{tag.name}</div>
          </>,
          <>{/* VALID SUBSCRIBERS Column Data */}</>,
          <>
            <div className="text-gray-500">
              {/* INVALID SUBSCRIBERS Column Data */}
            </div>
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
  }, [tags]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <TagIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">Tags</span>
          {tags && (
            <span className="ml-1 text-2xl font-light text-gray-500">
              ({tags.total})
            </span>
          )}
        </h2>
      </div>
      <div className="flex justify-between">
        <div>
          <Input label="" type="text" placeholder="Search" name="search" />
        </div>
        <div>
          <Link
            className="flex rounded-lg bg-indigo-700 px-4 py-2 text-white hover:bg-indigo-800"
            href="/tag/create"
          >
            Create Tag
          </Link>
        </div>
      </div>
      <Table data={tableData} />
    </div>
  );
};

export default Page;
