import api from '@/utils/api';
import { toast } from 'react-toastify';

export const getTags = async () => {
  const response = await api.get('/api/tag');
  const data = await response.data;
  return data;
};

export const createTag = async (user: any) => {
  try {
    const response = await api.post('/api/tag', user);
    const data = await response.data;
    toast.success('Tag Added Successfully');
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};
