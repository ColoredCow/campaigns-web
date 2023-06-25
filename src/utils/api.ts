import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'X-Requested-With': "XMLHttpRequest",
  },
  withCredentials: true,
});

export default api;
