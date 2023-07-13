'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  EnvelopeIcon as SolidEnvelopeIcon,
  UserGroupIcon as SolidUserGroupIcon,
  TagIcon as SolidTagIcon,
  UsersIcon as SolidUsersIcon,
} from '@heroicons/react/24/solid';
import {
  EnvelopeIcon,
  UsersIcon,
  TagIcon,
  UserGroupIcon,
  AtSymbolIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const routes = [
    {
      href: '/campaign',
      label: 'Campaigns',
      icon: <EnvelopeIcon className="h-5 w-5" />,
      activeIcon: <SolidEnvelopeIcon className="h-5 w-5" />,
    },
    {
      href: '/subscriber',
      label: 'Subscribers',
      icon: <UserGroupIcon className="h-5 w-5" />,
      activeIcon: <SolidUserGroupIcon className="h-5 w-5" />,
    },
    {
      href: '/tag',
      label: 'Tags',
      icon: <TagIcon className="h-5 w-5" />,
      activeIcon: <SolidTagIcon className="h-5 w-5" />,
    },
    {
      href: '/sender-identity',
      label: 'Sender Identities',
      icon: <AtSymbolIcon className="h-5 w-5" />,
      activeIcon: <AtSymbolIcon className="h-5 w-5" />,
    },
    {
      href: '/user',
      label: 'Users',
      icon: <UsersIcon className="h-5 w-5" />,
      activeIcon: <SolidUsersIcon className="h-5 w-5" />,
    },
  ];
  const pathname = usePathname();
  return (
    <nav className="sticky top-14 flex w-full flex-col px-2 py-10">
      {routes.map((route, index) => {
        const isActive = pathname.startsWith(route.href);
        return (
          <Link
            key={index}
            href={{ pathname: route.href }}
            className={`flex items-center rounded-md px-6 py-3 transition-all ${
              isActive
                ? 'bg-indigo-200 font-semibold text-indigo-600'
                : 'font-light text-gray-500 hover:text-gray-900'
            }`}
          >
            {isActive ? route.activeIcon : route.icon}
            <span className="ml-1">{route.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Sidebar;
