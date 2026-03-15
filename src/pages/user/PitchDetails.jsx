import { useNavigate, useParams } from "react-router-dom";
import {
  useConfirmBookingMutation,
  useGetSlotsQuery,
  useReserveSlotMutation,
} from "../../api/bookingApi";
import SlotSelector from "../../components/pitch/SlotSelector";
import { useState } from "react";
import { toast } from "react-toastify";

export default function PitchDetails() {

  const navigate = useNavigate();
  const { pitchId } = useParams();

  const [reserveSlot] = useReserveSlotMutation();
  const [confirmBooking] = useConfirmBookingMutation();

  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [selectedSlot, setSelected] = useState(null);

  const { data: slots = [], isLoading } = useGetSlotsQuery({
    pitchId,
    date,
  });

  const handleReservation = async (e, slot) => {
    e.preventDefault();

    try {
      await reserveSlot({
        pitchId,
        date,
        slot: slot.time,
      }).unwrap();

      toast.success("Slot reserved successfully");
      setSelected(slot.time);

    } catch (error) {
      toast.error(
        error?.data?.message || "Slot reservation failed"
      );
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      await confirmBooking({
        pitchId,
        date,
        slot: selectedSlot,
      }).unwrap();

      toast.success("Slot booked successfully 🎉");

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {
      toast.error(
        error?.data?.message || "Booking failed"
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">

      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Pitch Slots
        </h2>
        <p className="text-gray-500">
          Select a date and reserve your preferred time slot
        </p>
      </div>

      {/* Date Selector */}
      <div className="bg-white shadow-sm border rounded-lg p-4 flex items-center gap-4">
        <label className="font-semibold text-gray-700">
          Select Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      {/* Slot Container */}

      {!selectedSlot&& <div className="bg-white border rounded-xl shadow-sm p-6">

        <h3 className="text-lg font-semibold mb-4">
          Available Slots
        </h3>

        {isLoading ? (
          <div className="text-gray-500">
            Loading slots...
          </div>
        ) : (
          <SlotSelector
            slots={slots}
            handleReservation={handleReservation}
            selected={selectedSlot}
          />
        )}

      </div>}
     

      {/* Selected Slot Info */}
      {selectedSlot && (
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg flex justify-between items-center">

          <div>
            <p className="text-sm text-gray-600">
              Selected Slot
            </p>
            <p className="font-semibold text-green-700">
              {date} • {selectedSlot}
            </p>
          </div>
<div className="gap-4">
          <button
            onClick={handleBooking}
            className="bg-green-500 mx-3 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition shadow"
          >
            Confirm Booking
          </button>
           <button
            onClick={()=>{window.location.reload()}}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition shadow"
          >
            Re-Select Slot
          </button>
          </div>

        </div>
      )}

    </div>
  );
}