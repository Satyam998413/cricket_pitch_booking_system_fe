import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { useDeletePitchMutation } from "../../api/pitchApi";
import { toast } from "react-toastify";

export default function PitchCard({ pitch ,setPitch}) {
  const user=useSelector((state)=>state.auth.user)
  const navigate = useNavigate();

  const [deletePitch,isLoading]=useDeletePitchMutation();

   const handleDeletePitch = async (e,pitch) => {
      e.preventDefault();
  
      try {
  
       
          await deletePitch({
           id:pitch._id
          }).unwrap();
  
          toast.success("Pitch created successfully");
  
      } catch (error) {
  
        toast.error(
          error?.data?.message || "Something went wrong"
        );
  
      }
    };
 return (

  <motion.div
 
   className="bg-white shadow-lg rounded-xl p-6"
  >
<div onClick={()=>{user.role!=='admin'&&navigate(`/pitch/${pitch._id}`)}}>
  <div className="flex justify-between">
  <div>
   <h3 className="text-xl font-bold">
     {pitch.name}
   </h3>

   <p className="text-gray-500">
     {pitch.location}
   </p>

   <p className="text-green-600 font-bold mt-2">
     ₹{pitch.price_per_hour}/hour
   </p>
   
</div>

{user.role==='admin'&&
<div>

<div className="text-blue-500 underline font-bold" onClick={()=>setPitch(pitch)}>Edit</div>
<div className="text-red-500 underline fon-bold" onClick={(e)=>handleDeletePitch(e,pitch)}>Delete</div>
</div>


}

</div>
</div>
  </motion.div>

 )

}