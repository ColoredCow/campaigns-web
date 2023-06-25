import { useAuth } from '@/hooks/auth';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const UserIcon = ({ userAcronym }: { userAcronym: string }) => {
  const { logout } = useAuth();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {userAcronym ? (
          <Menu.Button className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-indigo-700 text-sm text-white">
            {userAcronym}
          </Menu.Button>
        ) : (
          <div className="h-[30px] w-[30px] animate-pulse rounded-full bg-gray-300"></div>
        )}
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="p-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'text-red-500' : 'text-gray-900'
                  } group flex w-full items-center rounded-md p-2 text-sm text-gray-900`}
                  onClick={logout}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserIcon;
