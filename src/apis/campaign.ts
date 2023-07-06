import api from '@/utils/api';
import { toast } from 'react-toastify';

export const getCampaigns = async () => {
  const response = await api.get('/api/campaign');
  const data = await response.data;
  return data;
};

export const createCampaign = async (data: any) => {
  try {
    const response = await api.post('/api/campaign', data);
    const responseData = await response.data;
    return responseData;
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};
