import api from '@/utils/api';
import { Subscribers } from '@/utils/types';

export const getSubscribers = async () => {
  const response = await api.get('/api/subscriber');
  const data = await response.data;
  return data;
};

export const createSubscriber = async (subscriber: Subscribers) => {
  try {
    const response = await api.post('/api/subscriber', subscriber);
    const data = await response.data;
    return data;
  } catch (error: any) {
    throw error;
  }
};

export const getTags = async () => {
  const response = await api.get('/api/tag');
  const data = await response.data;
  return data;
};
