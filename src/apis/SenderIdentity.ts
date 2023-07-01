import api from '@/utils/api';

export const getSenderIdentities = async () => {
  const response = await api.get('/api/sender-identity');
  const data = await response.data;
  return data;
};

export const createSenderIndentity = async (data: any) => {
  try {
    const response = await api.post('/api/sender-identity', data);
    const dataResponse = await response.data;
    return dataResponse;
  } catch (error: any) {
    throw error;
  }
};
