import Sidebar from "../components/layout/Sidebar"

export default function AdminLayout({children}){

 return(

 <div className="flex">

  <Sidebar/>

  <div className="flex-1 p-8 bg-gray-100 ms-[16vw]">
    {children}
  </div>

 </div>

 )

}