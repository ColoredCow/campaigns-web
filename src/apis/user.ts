import api from '@/utils/api';

export const getUsers = async () => {
  const response = await api.get('/api/user');
  const data = await response.data;
  return data;
};
