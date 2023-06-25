export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex items-center justify-between border-b px-6 py-3">
        <div>
          <div className="text-xl font-bold">Campaigns</div>
        </div>
        <div>
          <div>Vaibhav</div>
        </div>
      </nav>
      <div className="flex">
        <nav className="sticky top-0 flex w-[20%] flex-col px-2 py-6">
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
        <div className="w-[80%] p-10">{children}</div>
      </div>
    </div>
  );
}
