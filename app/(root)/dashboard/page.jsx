'use client'
import UserDashboard from "@/components/dashboardComponents/UserDashboard";
import { getUserProfile } from "@/utils/object-utils";
import Link from "next/link";

const DashboardPage = () => {

  const user =  JSON.parse(getUserProfile());

  const role = user?.role ?? null;
      
    const DashboardLink = ({ href, children }) => (
      <Link href={href} className="bg-primary shadow-lg p-5 md:p-20 rounded-md">
        <h2 className="font-semibold text-2xl">{children}</h2>
      </Link>
    );

  return (
    <div>
      {
        role  && <div className="h-[72vh] p-5 md:p-10 flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl text-center p-5">Welcome to Admin Dashboard</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5">
          <DashboardLink href="/dashboard/OwnerDashboard">Owner Dashboard</DashboardLink>
          <DashboardLink href="/dashboard/RmsDashboard">Rms Dashboard</DashboardLink>
        </div>
      </div>
      }

      {
        !role  && <UserDashboard />
      }
    </div>
  )
}

export default DashboardPage;