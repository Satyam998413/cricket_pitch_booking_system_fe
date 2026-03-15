import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import LogoutButton from "./LogoutButton";

const ProfileCard = () => {
  const [isShow, setIsShow] = useState(false);
  const user = useSelector((state) => state.auth.user);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      {/* Profile Button */}
      <div className="flex items-center gap-2 cursor-pointer bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200 transition">
        
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
          {user?.username?.charAt(0).toUpperCase()}
        </div>

        <span className="text-sm font-medium text-gray-700">
          {user?.username}
        </span>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isShow && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 8 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={` absolute  w-64 bg-white rounded-xl shadow-xl border p-4 z-30 ${user.role==='admin'?"left-0 -top-60":"right-0 top-12"}`}
          >
            {/* right-0 top-12  */}
            <div className="flex items-center gap-3 border-b pb-3 mb-3">
              
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-semibold">
                {user?.username?.charAt(0).toUpperCase()}
              </div>

              <div>
                <div className="font-semibold text-gray-800">
                  {user?.username}
                </div>
                <div className="text-sm capitalize font-semibold text-gray-800 border-2 w-max p-1 border-black rounded-xl">
                  {user?.role}
                </div>
                <div className="text-sm text-gray-500">
                  {user?.email}
                </div>
              </div>

            </div>

            <div className="flex flex-col gap-2">
              

              <div className="border-t pt-2">
                <LogoutButton />
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileCard;