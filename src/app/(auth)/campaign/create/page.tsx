'use client';

import Button from '@/components/Button';
import {
  AtSymbolIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import Input from '@/components/Input';
import { useFormik } from 'formik';
import { createCampaign } from '@/apis/campaign';
import { getSenderIdentities } from '@/apis/SenderIdentity';
import { getTags } from '@/apis/tag';
import * as yup from 'yup';
import { Tooltip, Grid } from '@nextui-org/react';
import Select from '@/components/Select';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

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
    validationSchema: yup.object({
      sender_identity_id: yup.string().required('Sender Identity is required'),
      subscription_list_id: yup.string().required('Subscription is required'),
      email_subject: yup.string().required('Email Subject is required'),
    }),
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
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <Select
            options={senderIdentity.data || []}
            value={formik.values.sender_identity_id}
            onChange={formik.handleChange}
            name="sender_identity_id"
            label="Sender Identity"
            mandatoryField={!!formik.errors.email_subject}
            errorMessage={formik.errors.email_subject}
          />
          <Select
            options={tags.data || []}
            value={formik.values.subscription_list_id}
            onChange={formik.handleChange}
            name="subscription_list_id"
            label="Select List"
            mandatoryField={!!formik.errors.email_subject}
            errorMessage={formik.errors.email_subject}
          />
        </div>
        <Input
          type="text"
          name="email_subject"
          label="Subject"
          placeholder="Enter Subject"
          value={formik.values.email_subject}
          onChange={formik.handleChange}
          mandatoryField={!!formik.errors.email_subject}
          errorMessage={formik.errors.email_subject}
        />
        <Button
          className="btn rounded-3 font-golas-600 fs-16 w-203 btn-curious-blue py-2 text-center text-white"
          type="submit"
        >
          Create Campaign
        </Button>
      </form>
    </div>
  );
};

export default Page;
