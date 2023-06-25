export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex justify-between bg-gray-700 px-6 py-3 text-white">
        <div>
          <div className="text-xl">Campaigns</div>
        </div>
        <div>
          <div>Vaibhav</div>
        </div>
      </nav>
      <div className="flex">
        <nav className="sticky top-0 flex h-screen w-[20%] flex-col bg-gray-100 px-2 py-6">
          <div className="rounded px-6 py-3 text-gray-500 hover:bg-gray-200">
            Campaigns
          </div>
          <div className="rounded px-6 py-3 text-gray-500 hover:bg-gray-200">
            Subscriber
          </div>
          <div className="rounded px-6 py-3 text-gray-500 hover:bg-gray-200">
            Tags
          </div>
          <div className="rounded bg-indigo-200 px-6 py-3 text-indigo-600">
            Sender Identities
          </div>
          <div className="rounded px-6 py-3 text-gray-500 hover:bg-gray-200">
            Users
          </div>
        </nav>
        <div className="w-[80%] p-10">{children}</div>
      </div>
    </div>
  );
}
