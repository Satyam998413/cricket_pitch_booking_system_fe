import { BrowserRouter,Routes,Route } from "react-router-dom"

import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"

import Dashboard from "./pages/user/Dashboard"
import BookingCalendar from "./pages/user/BookingCalendar"
import MyBookings from "./pages/user/MyBookings"
import PitchDetails from "./pages/user/PitchDetails"

import AdminDashboard from "./pages/admin/AdminDashboard"
import ManageBookings from "./pages/admin/ManageBookings"
import ManagePitches from "./pages/admin/ManagePitches"
import AdminLayout from "./layouts/AdminLayout"
import MainLayout from "./layouts/MainLayout"
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pitches from "./pages/admin/Pitches"

function App(){

  const user=useSelector((state)=>state.auth.user);

 return(
<>
  <ToastContainer position="top-right" autoClose={3000} />

 <BrowserRouter>
{!user&& <Routes>
 <Route path="/" element={<Login/>}/>
 <Route path="/login" element={<Login/>}/>
 <Route path="/signup" element={<Signup/>}/></Routes>}

 {user&&user.role==='user'&& <Routes>
<Route path="/" element={<MainLayout><Dashboard/></MainLayout>}/>
 <Route path="/dashboard" element={<MainLayout><Dashboard/></MainLayout>}/>
 <Route path="/pitches" element={<MainLayout><BookingCalendar/></MainLayout>}/>
 <Route path="/pitch/:pitchId" element={<MainLayout><PitchDetails/></MainLayout>}/>
 <Route path="/my-bookings" element={<MainLayout><MyBookings/></MainLayout>}/>
 </Routes>}

 {user&&user.role==='admin'&&
 <Routes>
 <Route path="/" element={
  <AdminLayout>
  <AdminDashboard/>
  </AdminLayout>
  }/>
 <Route path="/admin" element={
  <AdminLayout>
  <AdminDashboard/>
  </AdminLayout>
  }/>
 <Route path="/admin/pitches" element={
   <AdminLayout>
  <Pitches/>
  </AdminLayout>
  }/>
  

 <Route path="/admin/bookings" element={
   <AdminLayout>

  <ManageBookings/>
  </AdminLayout>
  
}/>
 <Route path="/admin/pitches" element={  <AdminLayout><ManagePitches/></AdminLayout>}/>

 </Routes>}

 </BrowserRouter>
</>
 )

}

export default App