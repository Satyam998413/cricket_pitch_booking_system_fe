import { useEffect } from "react"


export default function SlotSelector({selected,slots=[], bookedSlots=[] ,handleReservation }) {
useEffect(() => {
  

  return () => {
    
  }
}, [selected])

 return (

 <div className="grid grid-cols-5 gap-3 mt-4">

 {slots.map((slot,i) => {

 const status = slot.status

 return(
 <button
 key={i}
 disabled={status==="booked"}
 onClick={(e)=>handleReservation(e,slot)}
 className={`p-3 rounded-lg text-sm font-semibold
 ${status==="booked" && "bg-red-500 text-white"}
 ${status==="available" && "bg-green-500 text-white"}
 ${status==="reserved" && "bg-yellow-500 text-white"}
 
 `}
 >

 {slot.time}

 </button>

 )

 })}

 </div>

 )

}