import api from "@/utils/api";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import useSWR from "swr";

type loginProps = {
  setErrors: any,
  email: string,
  password: string,
}

export const useAuth = ({ middleware }: { middleware?: any } = {}) => {

  const router = useRouter();

  // loading
  const [isLoading, setIsLoading] = useState(true);

  // user
  const { data: user, error, mutate } = useSWR('/api/user',
    () => api.get('/api/user')
      .then(response => response.data)
      .catch(error => {
        if (error.response.status !== 409) throw error
      })
  )

  // csrf
  const csrf = () => api.get('/sanctum/csrf-cookie')

  // login
  const login = async ({ setErrors, ...props }: loginProps) => {
    setErrors([]);

    await csrf();

    await api.post('/api/login', props)
      .then(async () => await mutate() && router.push('/campaign'))
      .catch(error => {
        if (error.response.status !== 422) throw error;
        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  // logout
  const logout = async () => {
    await api.post('/api/logout');
    mutate(null);
    router.push('/login');
  }

  useEffect(() => {
    if (user || error) {
      setIsLoading(false)
    }

    if (middleware == 'guest' && user) router.push('/campaign')
    if (middleware == 'auth' && error) router.push('/login')
  }, [user, error, middleware, router])

  return {
    user,
    csrf,
    isLoading,
    login,
    logout
  }
}
