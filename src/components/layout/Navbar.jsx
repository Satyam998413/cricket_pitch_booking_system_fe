import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="h-16 bg-gray-900 text-white px-6 flex items-center justify-between shadow-md">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center font-bold">
          C
        </div>
        <h1 className="text-lg font-semibold tracking-wide">
          Cricket Booking
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link
          to="/"
          className="hover:text-green-400 transition duration-200"
        >
          Dashboard
        </Link>

        <Link
          to="/pitches"
          className="hover:text-green-400 transition duration-200"
        >
          Pitches
        </Link>

        <Link
          to="/my-bookings"
          className="hover:text-green-400 transition duration-200"
        >
          My Bookings
        </Link>
      </div>

      {/* Profile */}
      <div className="flex items-center">
        <ProfileCard />
      </div>

    </nav>
  );
}