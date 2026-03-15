import { Link, useLocation } from "react-router-dom";
import ProfileCard from "./ProfileCard";

export default function Sidebar() {

  const location = useLocation();

  const navItem = (path, label) => {
    const active = location.pathname === path;

    return (
      <Link
        to={path}
        className={`px-3 py-2 rounded-md transition font-medium
        ${
          active
            ? "bg-green-500 text-white"
            : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <aside className="w-64 bg-gray-900 text-white fixed h-screen flex flex-col justify-between p-6">

      {/* Top Section */}
      <div>

        {/* Logo / Title */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-wide">
            Admin Panel
          </h2>
          <p className="text-sm text-gray-400">
            Cricket Booking
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3">

          {navItem("/admin", "Dashboard")}
          {navItem("/admin/pitches", "Pitch")}
          {navItem("/admin/bookings", "Bookings")}

        </nav>

      </div>

      {/* Bottom Profile */}
      <div className="border-t border-gray-700 pt-4">
        <ProfileCard />
      </div>

    </aside>
  );
}