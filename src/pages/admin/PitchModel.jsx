import { useState, useEffect } from "react";
import {
  useCreatePitchMutation,
  useUpdatePitchMutation
} from "../../api/pitchApi";
import { toast } from "react-toastify";

export default function PitchModal({ isOpen, onClose, pitch }) {

  const isEdit = Boolean(pitch);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const [createPitch, { isLoading: creating }] = useCreatePitchMutation();
  const [updatePitch, { isLoading: updating }] = useUpdatePitchMutation();

  useEffect(() => {
    if (pitch) {
      setName(pitch.name);
      setLocation(pitch.location);
      setPrice(pitch.price_per_hour);
    } else {
      setName("");
      setLocation("");
      setPrice("0");
    }
  }, [pitch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (isEdit) {
        await updatePitch({
          id: pitch._id,
          name,
          location,
          price_per_hour: price
        }).unwrap();

        toast.success("Pitch updated successfully");

      } else {

        await createPitch({
          name,
          location,
          price_per_hour: price
        }).unwrap();

        toast.success("Pitch created successfully");

      }

      onClose();

    } catch (error) {

      toast.error(
        error?.data?.message || "Something went wrong"
      );

    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white rounded-lg shadow-lg p-6 w-96">

        <h2 className="text-xl font-bold mb-4">
          {isEdit ? "Update Pitch" : "Create Pitch"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-sm">Pitch Name</label>
            <input
              value={name}
              required
              className="border p-2 w-full rounded"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm">Location</label>
            <input
              value={location}
              required
              className="border p-2 w-full rounded"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm">Price Per Hour</label>
            <input
              type="number"
              value={price}
              required
              className="border p-2 w-full rounded"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex gap-3">

            <button
              type="submit"
              disabled={creating || updating}
              className="bg-green-600 text-white px-4 py-2 rounded w-full"
            >
              {creating || updating
                ? "Saving..."
                : isEdit
                ? "Update"
                : "Create"}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded w-full"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}