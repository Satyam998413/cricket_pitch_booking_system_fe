import { useState } from "react";
import { useGetPitchesQuery } from "../../api/pitchApi";
import PitchGrid from "../../components/pitch/PitchGrid";
import PitchModal from "./PitchModel";

export default function Pitches() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: pitches = [], isLoading } = useGetPitchesQuery();
  const [pitch, setPitch] = useState({ name: "", location: "", price: 0 });
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <PitchModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pitch={pitch}
      />
      {/* Page Header */}
      <div >
        <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Cricket Pitches</h1>

        <button
          onClick={() => {
            setIsOpen(true);
            setPitch(null);
          }}
          className="bg-green-500 hover:bg-green-600 p-2 text-white font-bold rounded-lg"
        >
          Create Pitch
        </button>
        </div>
      </div>


      {/* Loading State */}
      {isLoading && (
        <div className="text-gray-500">Loading available pitches...</div>
      )}

      {/* Empty State */}
      {!isLoading && pitches.length === 0 && (
        <div className="bg-gray-100 p-10 rounded-lg text-center text-gray-600">
          No cricket pitches available right now.
        </div>
      )}

      {/* Pitch Grid */}
      {!isLoading && pitches.length > 0 && (
        <PitchGrid
          pitches={pitches}
          setPitch={(pitch) => {
            setPitch(pitch);
            setIsOpen(true);
          }}
        />
      )}
    </div>
  );
}
