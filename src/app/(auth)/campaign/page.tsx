'use client';

import { getCampaigns } from '@/apis/campaign';
import Button from '@/components/Button';
import Table from '@/components/Table';
import { Campaign, CampaignResource, TableData } from '@/utils/types';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import moment from 'moment';
import { useEffect, useState } from 'react';
// import Input from '@/components/Input';

const Page = () => {
  const [campaigns, setCampaigns] = useState<CampaignResource | undefined>(
    undefined
  );
  const [tableData, setTableData] = useState<TableData>({
    headers: ['Details', 'Sent on', 'Sender identity'],
    rows: [],
  });

  useEffect(() => {
    const fetchCampaigns = async () => {
      setCampaigns(await getCampaigns());
    };
    fetchCampaigns();
  }, []);

  useEffect(() => {
    if (campaigns) {
      const rows = campaigns.data.map((campaign: Campaign) => {
        return [
          <>
            <span className="truncate">{campaign.email_subject}</span>
            <span className="text-gray-500">{campaign.tag.name}</span>
          </>,
          <>
            <span>{moment(campaign.created_at).format('MMM DD, YYYY')}</span>
            <span className="text-gray-500">
              {moment(campaign.created_at).format('hh:MM A')}
            </span>
          </>,
          <>
            <span>{campaign.sender_identity.name}</span>
            <span className="text-gray-500">
              {campaign.sender_identity.email}
            </span>
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
  }, [campaigns]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <EnvelopeIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">Campaigns</span>
          {campaigns && (
            <span className="ml-1 text-2xl font-light text-gray-500">
              ({campaigns.total})
            </span>
          )}
        </h2>
        <div>
          <Button onClick={() => console.log('new campaign')}>
            New Campaign
          </Button>
        </div>
      </div>
      <Table data={tableData} />
    </div>
  );
};

export default Page;
