
import { toast } from "react-toastify";
import { useDeleteBookingMutation, useMyBookingsQuery } from "../../api/bookingApi";

export default function MyBookings() {

  const { data, isLoading } = useMyBookingsQuery();
  const [deleteBooking] = useDeleteBookingMutation();

  if (isLoading) {
    return <div className="p-6 text-lg">Loading bookings...</div>;
  }



const handleDelete = async (bookingId) => {
  try {
    await deleteBooking(bookingId).unwrap();
    toast.success("Booking deleted successfully");
  } catch (error) {
    toast.error(error?.data?.message || "Delete failed");
  }
};
  
  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          All Bookings
        </h2>

       
      </div>

      {/* Empty State */}
      {(!data || data.length === 0) && (
        <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-600">
          No bookings yet.
          
        </div>
      )}

      {/* Booking Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {data?.map((booking) => (

          <div
            key={booking._id}
            className="bg-white border rounded-xl shadow-sm p-5 hover:shadow-lg transition"
          >

            {/* Pitch Name */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {booking.pitchName}
            </h3>

            <div className="space-y-2 text-gray-600 text-sm">

              <div>
                <span className="font-semibold text-gray-700">
                  User:
                </span>{" "}
                {booking.username}
              </div>

              <div>
                <span className="font-semibold text-gray-700">
                  Location:
                </span>{" "}
                {booking.location}
              </div>

              <div>
                <span className="font-semibold text-gray-700">
                  Date:
                </span>{" "}
                {booking.booking_date}
              </div>

              <div>
                <span className="font-semibold text-gray-700">
                  Time:
                </span>{" "}
                {booking.slot}
              </div>

            </div>

            {/* Status */}
            <div className="mt-4">
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                {booking.status}
              </span>
              <div className="text-red-500 underline fon-bold" onClick={(e)=>handleDelete(booking._id)}>Delete</div>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}