import AuthNav from '@/components/Navbar/AuthNav';
import Sidebar from '@/components/Sidebar';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <AuthNav />
      <div className="mt-14 flex">
        <div className="w-[17%]">
          <Sidebar />
        </div>
        <div className="w-[83%] px-9 py-10">{children}</div>
      </div>
    </div>
  );
}
