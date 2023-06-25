const Sidebar = () => {
  return (
    <nav className="sticky top-0 flex w-full flex-col px-2 py-10">
      <div className="rounded px-6 py-3 font-light text-gray-500 hover:bg-gray-200">
        Campaigns
      </div>
      <div className="rounded px-6 py-3 font-light text-gray-500 hover:bg-gray-200">
        Subscriber
      </div>
      <div className="rounded px-6 py-3 font-light text-gray-500 hover:bg-gray-200">
        Tags
      </div>
      <div className="rounded bg-indigo-200 px-6 py-3 font-semibold text-indigo-600">
        Sender Identities
      </div>
      <div className="rounded px-6 py-3 font-light text-gray-500 hover:bg-gray-200">
        Users
      </div>
    </nav>
  );
};

export default Sidebar;
