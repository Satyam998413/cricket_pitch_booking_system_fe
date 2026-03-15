import { useEffect } from "react"
import { socket } from "../../utils/socket"

export default function SocketListener(){

 useEffect(()=>{

 socket.on("slotBooked",(data)=>{

  console.log("Slot booked update",data)

 })

 return ()=>{

  socket.off("slotBooked")

 }

 },[])

 return null

}