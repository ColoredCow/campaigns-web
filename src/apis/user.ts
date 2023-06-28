import api from '@/utils/api';

export const getUsers = async () => {
  const response = await api.get('/api/users');
  const data = await response.data;
  {
    console.log(data, '-->checking tag data');
  }
  return data;
};
