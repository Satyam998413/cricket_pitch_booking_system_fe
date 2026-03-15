import Navbar from "../components/layout/Navbar"

export default function MainLayout({children}){

 return(

 <div>

  <Navbar/>

  <div className="p-6">
    {children}
  </div>

 </div>

 )

}