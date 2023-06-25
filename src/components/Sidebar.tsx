'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const routes = [
    { href: '/campaign', label: 'Campaigns' },
    { href: '/subscriber', label: 'Subscribers' },
    { href: '/tag', label: 'Tags' },
    { href: '/sender-identity', label: 'Sender Identities' },
    { href: '/user', label: 'Users' },
  ];
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 flex w-full flex-col px-2 py-10">
      {routes.map((route, index) => (
        <Link
          key={index}
          href={{ pathname: route.href }}
          className={`rounded px-6 py-3 transition-all ${
            pathname === route.href
              ? 'bg-indigo-200 font-semibold text-indigo-600'
              : 'font-light text-gray-500 hover:text-gray-900'
          }`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
