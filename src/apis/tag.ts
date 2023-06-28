import api from '@/utils/api';

export const getTags = async () => {
  const response = await api.get('/api/tag');
  const data = await response.data;
  {
    console.log(data, '-->checking tag data');
  }
  return data;
};
