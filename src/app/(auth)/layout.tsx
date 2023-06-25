import AuthNav from '@/components/AuthNav';
import Sidebar from '@/components/Sidebar';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <AuthNav />
      <div className="flex">
        <div className="w-[17%]">
          <Sidebar />
        </div>
        <div className="w-[83%] p-10">{children}</div>
      </div>
    </div>
  );
}
