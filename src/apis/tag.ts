import api from '@/utils/api';

export const getTags = async () => {
  const response = await api.get('/api/tag');
  const data = await response.data;
  return data;
};

export const createTag = async (user: any) => {
  try {
    const response = await api.post('/api/tag', user);
    const data = await response.data;
    return data;
  } catch (error: any) {
    throw error;
  }
};
