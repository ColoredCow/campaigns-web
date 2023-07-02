import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

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
  } = useSWR('/api/user', () =>
    api
      .get('/api/user')
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
        setAuthToken(resp.data);
        // Set authentication token as a cookie
        setCookie(null, 'auth_token', resp.data, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
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
    destroyCookie(null, 'auth_token'); // Remove the auth token cookie
    router.push('/login');
  };

  useEffect(() => {
    const cookies = parseCookies();

    if (user || error) {
      setIsLoading(false);
    }

    if (middleware == 'guest' && user) router.push('/campaign');
    if (middleware == 'auth' && error) router.push('/login');

    // Check if auth token cookie exists
    if (!user && !error && cookies.auth_token) {
      setAuthToken(cookies.auth_token);
      mutate();
    }

    // If user is not logged in and auth token cookie does not exist, redirect to login page
    if (!cookies.auth_token) {
      router.push('/login');
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
