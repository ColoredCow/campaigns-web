import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

type loginProps = {
  setErrors: any;
  email: string;
  password: string;
};

export const useAuth = ({ middleware }: { middleware?: any } = {}) => {
  const setAuthToken = (token: string | null) => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common['Authorization'];
    }
  };

  const router = useRouter();

  // loading
  const [isLoading, setIsLoading] = useState(true);

  // user
  const {
    data: user,
    error,
    mutate,
  } = useSWR('/api/profile', () =>
    api
      .get('/api/profile')
      .then((response) => response.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      })
  );

  // csrf
  const csrf = () => api.get('/sanctum/csrf-cookie');

  // login
  const login = async ({ setErrors, ...props }: loginProps) => {
    setErrors([]);

    await csrf();

    await api
      .post('/api/login', props)
      .then(async (resp) => {
        {
          console.log(resp.data, '--> resp.data');
        }
        setAuthToken(resp.data);
        await mutate();
        router.push('/campaign');
      })
      .catch((error) => {
        // Handle error
      });
  };

  // logout
  const logout = async () => {
    await api.post('/api/logout');
    mutate(null);
    router.push('/login');
  };

  useEffect(() => {
    if (user || error) {
      setIsLoading(false);
    }

    if (middleware == 'guest' && user) router.push('/campaign');
    if (middleware == 'auth' && error) router.push('/login');
  }, [user, error, middleware, router]);

  return {
    user,
    csrf,
    isLoading,
    login,
    logout,
  };
};
