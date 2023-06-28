import api from '@/utils/api';

export const getSubscribers = async () => {
  const response = await api.get('/api/subscriber');
  const data = await response.data;
  {
    console.log(data, '-->checking subscriber data');
  }
  return data;
};
