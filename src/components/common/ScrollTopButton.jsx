import { useEffect,useState } from "react"
import useThrottle from "../../hooks/useThrottle"

export default function ScrollTopButton(){

 const [show,setShow] = useState(false)

 const handleScroll = useThrottle(()=>{
  setShow(window.scrollY > 200)
 },300)

 useEffect(()=>{

 window.addEventListener("scroll",handleScroll)

 return ()=>{
  window.removeEventListener("scroll",handleScroll)
 }

 },[])

 if(!show) return null

 return(

 <button
 onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
 className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full"
 >
 ↑
 </button>

 )

}