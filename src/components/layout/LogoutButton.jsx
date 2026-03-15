import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { toast } from "react-toastify";

const LogoutButton = () => {
     const dispatch = useDispatch();
 const navigate = useNavigate();
    
 const handleLogout = () => {

   dispatch(logout());

   toast.success("Logged out successfully");

   navigate("/login");
 };

  return (
   <button
     onClick={handleLogout}
     className="bg-red-500 hover:bg-red-600 p-2 rounded-lg mt-10"
   >
     Logout
   </button>
  )
}

export default LogoutButton
