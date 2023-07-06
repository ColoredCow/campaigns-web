'use client';

import {
  AtSymbolIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import { createCampaign } from '@/apis/campaign';
import { getSenderIdentities } from '@/apis/SenderIdentity';
import { getTags } from '@/apis/tag';
import { Tooltip, Grid } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Campaign from '@/components/Forms/Campaign';
import { campaignValidation } from '@/validations/campaign';

const Page = () => {
  const router = useRouter();
  const [tags, setTags] = useState('');
  const [senderIdentity, setSenderIdentity] = useState('');
  const onSubmit = async (values: any) => {
    try {
      await createCampaign(values);
      toast.success('Sender Identity created successfully');
      router.back();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchTags = async () => {
      setTags(await getTags());
    };
    const fetchSenderIdentities = async () => {
      setSenderIdentity(await getSenderIdentities());
    };
    fetchTags();
    fetchSenderIdentities();
  }, []);

  const formik = useFormik({
    initialValues: {
      email_subject: '',
      sender_identity_id: '',
      subscription_list_id: '',
      email_body: 'Email Body', // We need ot add this field in the form when we are implementing the wisywig editor
    },
    onSubmit: onSubmit,
    validationSchema: campaignValidation,
  });

  return (
    <div className="flex flex-col">
      <div>
        <h2 className="mb-7 flex">
          <AtSymbolIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">Create Campaign</span>
          <Grid xs={3} justify="flex-start">
            <Tooltip
              color="invert"
              content={
                <>
                  Campaigns only go to the valid and subscribed users in the
                  selected list. <br /> <br />
                  Use following snippets to create dynamic email template:{' '}
                  <br /> <br />
                  <ul>
                    <li>User Name: |*USERNAME*|</li>
                  </ul>{' '}
                  <br />
                  For example: Dear |*USERNAME*|
                </>
              }
              placement="rightStart"
            >
              <InformationCircleIcon className="h-9 w-9" />
            </Tooltip>
          </Grid>
        </h2>
      </div>
      <Campaign
        formik={formik}
        senderidentityOptions={senderIdentity.data || []}
        tagsOptions={tags.data || []}
        btnName="Create Campaign"
      />
    </div>
  );
};

export default Page;
