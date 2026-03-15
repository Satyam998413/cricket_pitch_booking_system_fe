

export default function SlotSelector({selected,slots=[], bookedSlots=[] ,handleReservation }) {


 return (

 <div className="grid grid-cols-5 gap-3 mt-4">

 {slots.map(slot => {

 const status = slot.status


 return(
 <button
 key={slot}
 disabled={status==="booked"}
 onClick={(e)=>handleReservation(e,slot)}
 className={`p-3 rounded-lg text-sm font-semibold
 ${status==="booked" && "bg-red-500 text-white"}
 ${status==="available" && "bg-green-500 text-white"}
 ${selected===slot && "ring-4 ring-blue-500"}
 `}
 >

 {slot.time}

 </button>

 )

 })}

 </div>

 )

}