'use client';

import Button from '@/components/Button';
import Table from '@/components/Table';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
// import Button from '@/components/Button';
// import Input from '@/components/Input';

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex justify-between">
        <h2 className="mb-4 flex items-end">
          <EnvelopeIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">Campaigns</span>
          <span className="ml-1 text-2xl font-light text-gray-500">(277)</span>
        </h2>
        <div>
          <Button onClick={() => console.log('new campaign')}>
            New Campaign
          </Button>
        </div>
      </div>
      <Table>
        <h1>ehlo</h1>
      </Table>
    </div>
  );
};

export default Page;
