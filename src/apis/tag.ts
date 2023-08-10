import api from '@/utils/api';
import { Tag } from '@/utils/types';

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

export const updateTag = async (tagId: number, tag: Tag) => {
  try {
    const response = await api.put(`/api/tag/${tagId}`, tag);
    const data = await response.data;
    return data;
  } catch (error: any) {
    throw error;
  }
};

export const getTag = async (tagId: number) => {
  try {
    const response = await api.get(`/api/tag/${tagId}`);
    return response;
  } catch (error: unknown) {
    throw error;
  }
};

export const deleteTag = async (tagId: number) => {
  try {
    const response = await api.delete(`/api/tag/${tagId}`);
    return response;
  } catch (error: unknown) {
    throw error;
  }
};
