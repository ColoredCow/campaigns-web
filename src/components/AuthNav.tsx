'use client';

import { useAuth } from '@/hooks/auth';
import { getAcronym } from '@/utils/common';
import { useEffect, useState } from 'react';

const AuthNav = () => {
  const { user } = useAuth();

  const [userAcronym, setUserAcronym] = useState('');

  useEffect(() => {
    if (user) {
      setUserAcronym(getAcronym(user.name));
    }
  }, [user]);

  return (
    <nav className="flex items-center justify-between border px-6 py-3">
      <div>
        <div className="text-xl font-bold">Campaigns</div>
      </div>
      <div>
        {user ? (
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-indigo-700 text-sm text-white">
            {userAcronym}
          </div>
        ) : (
          <div className="h-[30px] w-[30px] animate-pulse rounded-full bg-gray-300"></div>
        )}
      </div>
    </nav>
  );
};

export default AuthNav;
