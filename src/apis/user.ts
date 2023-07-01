import api from '@/utils/api';

export const getUsers = async () => {
  const response = await api.get('/api/users');
  const data = await response.data;
  return data;
};

export const createUser = async (user: any) => {
  try {
    const response = await api.post('/api/register', user);
    const data = await response.data;
    return data;
  } catch (error: any) {
    throw error;
  }
};
