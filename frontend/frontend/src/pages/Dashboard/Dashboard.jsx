import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";
import StatsSection from "../../components/common/StatsSection";
import CommunityMap from "../../components/common/Community";
import RecentReports from "../../components/common/RecentReports";
import MyCatsSection from "../../components/common/MyCatsSection";
import ActivityFeed from "../../components/common/ActivityFeed";
import VolunteerBanner from "../../components/common/VolunteerBanner";

export default function Dashboard() {
  return (
    <div className="flex bg-[#FFFDF9] min-h-screen">

      <Sidebar />

      <main className="flex-1 p-8">

        <Topbar />

        <StatsSection />

        <div className="grid grid-cols-12 gap-6 mt-6">

          <div className="col-span-8">

            <CommunityMap />

          </div>

          <div className="col-span-4">

            <RecentReports />

          </div>

        </div>

        <div className="grid grid-cols-12 gap-6 mt-6">

          <div className="col-span-8">

            <MyCatsSection />

          </div>

          <div className="col-span-4">

            <ActivityFeed />

          </div>

        </div>

        <VolunteerBanner />

      </main>

    </div>
  );
}
