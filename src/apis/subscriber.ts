import api from '@/utils/api';
import { Subscriber } from '@/utils/types';

export const getSubscribers = async () => {
  const response = await api.get('/api/subscriber');
  const data = await response.data;
  return data;
};

export const createSubscriber = async (subscriber: Subscriber) => {
  try {
    const response = await api.post('/api/subscriber', subscriber);
    const data = await response.data;
    return data;
  } catch (error: unknown) {
    throw error;
  }
};

export const updateSubscriber = async (
  subscriberId: number,
  subscriber: Subscriber
) => {
  try {
    const response = await api.put(
      `/api/subscriber/${subscriberId}`,
      subscriber
    );
    const data = await response.data;
    return data;
  } catch (error: unknown) {
    throw error;
  }
};

export const getSubscriber = async (subscriberId: number) => {
  try {
    const response = await api.get(`/api/subscriber/${subscriberId}`);
    return response;
  } catch (error: unknown) {
    throw error;
  }
};

export const deleteSubscriber = async (subscriberId: number) => {
  try {
    const response = await api.delete(`/api/subscriber/${subscriberId}`);
    const data = await response.data;
    return data;
  } catch (error: unknown) {
    throw error;
  }
};
