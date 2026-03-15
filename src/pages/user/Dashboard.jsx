import { useMyBookingsQuery } from "../../api/bookingApi";
import StatsCard from "../../components/dashboard/StatsCard";
import MyBookings from "./MyBookings";

export default function Dashboard() {

  const { data, isLoading } = useMyBookingsQuery();

  const totalBookings = data?.length || 0;

  const upcomingBookings =
    data?.filter(
      (b) => new Date(b.date) >= new Date()
    ).length || 0;

  const totalSpent =
    data?.reduce((sum, b) => sum + (b.totalPrice || 0), 0) || 0;

  if (isLoading) {
    return (
      <div className="p-6 text-lg">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-10">

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-gray-500">
          Overview of your cricket bookings
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <StatsCard
          title="Total Bookings"
          value={totalBookings}
        />

        <StatsCard
          title="Upcoming Matches"
          value={upcomingBookings}
        />

        <StatsCard
          title="Total Spent"
          value={`₹${totalSpent}`}
        />

      </div>

      {/* Bookings Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6">

        <h2 className="text-xl font-semibold mb-6">
          Recent Bookings
        </h2>

        <MyBookings />

      </div>

    </div>
  );
}