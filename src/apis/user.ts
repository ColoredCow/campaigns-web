import api from '@/utils/api';

export const getUsers = async () => {
  const response = await api.get('/api/user');
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

export const updateUser = async (userId: number, user: any) => {
  try {
    const response = await api.put(`/api/user/${userId}`, user);
    const data = await response.data;
    return data;
  } catch (error: unknown) {
    throw error;
  }
};

export const getUser = async (userId: number) => {
  try {
    const response = await api.get(`/api/user/${userId}`);
    return response;
  } catch (error: unknown) {
    throw error;
  }
};

export const deleteUser = async (userId: number) => {
  try {
    const response = await api.delete(`/api/user/${userId}`);
    const data = await response.data;
    return data;
  } catch (error: unknown) {
    throw error;
  }
};
