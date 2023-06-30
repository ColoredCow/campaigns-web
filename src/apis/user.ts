import api from '@/utils/api';
import { toast } from 'react-toastify';

export const getUsers = async () => {
  const response = await api.get('/api/users');
  const data = await response.data;
  {
    console.log(data, '-->checking tag data');
  }
  return data;
};

export const createUser = async (user: any) => {
  try {
    const response = await api.post('/api/register', user);
    const data = await response.data;
    toast.success('User Added Successfully');
    return data;
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};
