'use client';

import { useAuth } from '@/hooks/auth';
import { getAcronym } from '@/utils/common';
import { useEffect, useState } from 'react';
import UserIcon from './UserIcon';

const AuthNav = () => {
  const { user } = useAuth();

  const [userAcronym, setUserAcronym] = useState('');

  useEffect(() => {
    if (user) {
      setUserAcronym(getAcronym(user.name));
    }
  }, [user]);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border bg-white px-8 py-3">
      <div>
        <div className="text-xl font-bold">Campaigns</div>
      </div>
      <UserIcon userAcronym={userAcronym} />
    </nav>
  );
};

export default AuthNav;
