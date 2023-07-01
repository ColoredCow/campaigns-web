import api from '@/utils/api';
import { toast } from 'react-toastify';

export const getSubscribers = async () => {
  const response = await api.get('/api/subscriber');
  const data = await response.data;
  return data;
};

export const createSubscribers = async (subscriber: any) => {
  try {
    const response = await api.post('/api/subscriber', subscriber);
    const data = await response.data;
    return data;
  } catch (error: any) {
    throw error;
  }
};

export const getTagList = async () => {
  const response = await api.get('/api/tag');
  const data = await response.data;
  return data;
};
