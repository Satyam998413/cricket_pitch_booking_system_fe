import StatsCard from "../../components/dashboard/StatsCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import { useMyBookingsQuery } from "../../api/bookingApi";
import { useGetPitchesQuery } from "../../api/pitchApi";

export default function AdminDashboard() {


   const { data } = useMyBookingsQuery();
  
 const {data:pitches}=useGetPitchesQuery();
    const upcomingBookings =
      data?.filter(
        (b) => new Date(b.date) >= new Date()
      ).length || 0;
  
    const totalEarning=
      data?.reduce((sum, b) => sum + (b.totalPrice || 0), 0) || 0;
  return (
    <div className="p-6 space-y-8">

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-500">
          Monitor pitches, bookings and revenue
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          title="Total Pitches"
          value={pitches?.length||0}
        />

        <StatsCard
          title="Bookings Today"
          value={upcomingBookings}
        />

        <StatsCard
          title="Revenue"
          value={totalEarning}
        />

      </div>

      {/* Chart Section */}
      <div className="bg-white border rounded-xl shadow-sm p-6">

        <h2 className="text-xl font-semibold mb-6">
          Revenue Overview
        </h2>

        <RevenueChart data={data} />

      </div>

    </div>
  );
}