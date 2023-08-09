'use client';

import { getTags } from '@/apis/tag';
import Table from '@/components/Table';
import { Tag, TableData, TagResource } from '@/utils/types';
import { TagIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { deleteTag } from '@/apis/tag';
import { toast } from 'react-toastify';

const Page = () => {
  const [tags, setTags] = useState<TagResource | undefined>(undefined);
  const [tableData, setTableData] = useState<TableData>({
    headers: ['Name', 'Valid Subscribers', 'Invalid Subscribers'],
    rows: [],
  });

  const fetchTags = async () => {
    setTags(await getTags());
  };

  useEffect(() => {
    fetchTags();
    const showDeleteConfirmationModal = async (id: number) => {
      const result = confirm(
        'Are you sure you want to delete this subscriber?'
      );
      if (result) {
        try {
          await deleteTag(id);
          toast.success('Tag deleted successfully');
          fetchTags();
        } catch (error: any) {
          toast.error(error.response.data.message);
        }
      }
    };
    if (tags) {
      const rows = tags.data.map((tag: Tag) => {
        return [
          <>
            <div>{tag.name}</div>
            {/* <div className="text-gray-500">{campaign.tag.name}</div> */}
          </>,
          <>
            {/* <div>{moment(campaign.created_at).format('MMM DD, YYYY')}</div>
          <div className="text-gray-500">
            {moment(campaign.created_at).format('hh:MM A')}
          </div> */}
          </>,
          <>
            {/* <div>{campaign.sender_identity.name}</div> */}
            <div className="text-gray-500">
              {/* {campaign.sender_identity.email} */}
            </div>
          </>,
          <>
            <div className="flex justify-end">
              <Link
                href={{ pathname: `/tag/${tag.id}/edit` }}
                className="text-gray-400 hover:text-indigo-700"
              >
                <PencilSquareIcon className="h-5 w-5" />
              </Link>
              <span
                onClick={() => showDeleteConfirmationModal(tag.id)}
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
