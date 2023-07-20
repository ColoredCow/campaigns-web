import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

type loginProps = {
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
  const login = async ({ ...props }: loginProps) => {
    await csrf();

    try {
      await api.post('/api/login', props).then(async (resp) => {
        setAuthToken(resp.data);
        setCookie(null, 'authToken', resp.data, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
        await mutate();
        router.push('/campaign');
      });
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  // logout
  const logout = async () => {
    await api.post('/api/logout');
    mutate(null);
    destroyCookie(null, 'authToken');
    router.push('/login');
  };

  useEffect(() => {
    const cookies = parseCookies();

    // If user is not logged in and auth token cookie does not exist, redirect to login page
    if (!cookies.authToken) {
      router.push('/login');
    }

    if (user || error) {
      setIsLoading(false);
    }

    if (middleware == 'guest' && user) router.push('/campaign');
    if (middleware == 'auth' && error) router.push('/login');

    if (!user && !error && cookies.authToken) {
      setAuthToken(cookies.authToken);
      mutate();
    }
  }, [user, error, middleware, router]);

  return {
    user,
    csrf,
    isLoading,
    login,
    logout,
  };
};
