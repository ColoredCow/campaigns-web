'use client';

import { getSenderIdentities } from '@/apis/SenderIdentity';
import Button from '@/components/Button';
import Table from '@/components/Table';
// import Input from '@/components/Input';
import { AtSymbolIcon } from '@heroicons/react/24/outline';
import { SenderIdentity, TableData } from '@/utils/types';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const Page = () => {
  const [senderIdentities, setSenderIdentities] = useState<
    SenderIdentity | undefined
  >(undefined);

  useEffect(() => {
    const fetchSenderIdentities = async () => {
      setSenderIdentities(await getSenderIdentities());
    };
    fetchSenderIdentities();
  }, []);

  const [tableData, setTableData] = useState<TableData>({
    headers: ['Name', 'Email'],
    rows: [],
  });

  useEffect(() => {
    if (senderIdentities) {
      const rows = senderIdentities.data.map(
        (senderIdentitie: SenderIdentity) => {
          return [
            <>
              <div>{senderIdentitie.name}</div>
              {/* <div className="text-gray-500">{campaign.tag.name}</div> */}
            </>,
            <>
              <div>{senderIdentitie.email}</div>
              <div className="text-gray-500">
                {/* {campaign.sender_identity.email} */}
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
        }
      );
      setTableData((data) => ({
        ...data,
        rows,
      }));
    }
  }, [senderIdentities]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <AtSymbolIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">Sender Identities</span>
          {senderIdentities && (
            <span className="ml-1 text-2xl font-light text-gray-500">
              ({senderIdentities.total})
            </span>
          )}
        </h2>
        <div>
          <Button onClick={() => console.log('new campaign')}>
            Create Sender Identity
          </Button>
        </div>
      </div>
      <Table data={tableData} />
    </div>
  );
};

export default Page;
