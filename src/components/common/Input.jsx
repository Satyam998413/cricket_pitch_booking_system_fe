export default function Input({label, ...props}) {

  return (
    <div className="mb-4">

      {label && (
        <label className="block mb-1 text-sm font-semibold">
          {label}
        </label>
      )}

      <input
        {...props}
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

    </div>
  )

}