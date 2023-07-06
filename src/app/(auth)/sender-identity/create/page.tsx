'use client';

import { AtSymbolIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import { createSenderIndentity } from '@/apis/SenderIdentity';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { senderIdentityValidation } from '@/validations/senderIdentity';
import SenderIdentity from '@/components/Forms/SenderIdentity';

const Page = () => {
  const router = useRouter();
  const onSubmit = async (values: any) => {
    try {
      await createSenderIndentity(values);
      toast.success('Sender Identity created successfully');
      router.back();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
    },
    onSubmit: onSubmit,
    validationSchema: senderIdentityValidation,
  });
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="mb-7 flex items-end">
          <AtSymbolIcon className="h-9 w-9" />
          <span className="ml-1 text-3xl">Create Sender Identity</span>
        </h2>
      </div>
      <SenderIdentity formik={formik} btnName="Create" />
    </div>
  );
};

export default Page;
