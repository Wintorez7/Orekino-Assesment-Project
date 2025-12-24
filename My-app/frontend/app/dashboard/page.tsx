import DashboardCards from "@/components/DashboardCards";
import DashboardHeader from "@/components/DashboardHeader";
import RightPanel from "@/components/RightPanel";

import Sidebar from "@/components/Sidebar";
import TrendingItems from "@/components/TrandingItem";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />

        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-y-auto p-6">
            <DashboardCards />
            <TrendingItems/>
          </main>
          <RightPanel/>
        </div>
      </div>
    </div>
  );
}
