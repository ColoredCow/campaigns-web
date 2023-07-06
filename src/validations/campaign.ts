import * as yup from 'yup';

export const campaignValidation = yup.object({
  sender_identity_id: yup.string().required('Sender Identity is required'),
  subscription_list_id: yup.string().required('Subscription is required'),
  email_subject: yup.string().required('Email Subject is required'),
});
