import { useGetPitchesQuery } from "../../api/pitchApi";
import PitchGrid from "../../components/pitch/PitchGrid";

export default function BookingCalendar() {

  const { data: pitches = [], isLoading } = useGetPitchesQuery();

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Book Cricket Pitch
        </h1>
        <p className="text-gray-500 mt-1">
          Select a cricket ground and reserve your playing slot
        </p>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="text-gray-500">
          Loading available pitches...
        </div>
      )}

      {/* Empty State */}
      {!isLoading && pitches.length === 0 && (
        <div className="bg-gray-100 p-10 rounded-lg text-center text-gray-600">
          No cricket pitches available right now.
        </div>
      )}

      {/* Pitch Grid */}
      {!isLoading && pitches.length > 0 && (
        <PitchGrid pitches={pitches} />
      )}

    </div>
  );
}