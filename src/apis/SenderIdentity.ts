import api from '@/utils/api';

export const getSenderIdentities = async () => {
  const response = await api.get('/api/sender-identity');
  const data = await response.data;
  return data;
};
