import { motion } from "framer-motion"

export default function Loader(){

 return(

 <div className="flex justify-center items-center h-40">

   <motion.div
     animate={{ rotate: 360 }}
     transition={{ repeat: Infinity, duration: 1 }}
     className="h-10 w-10 border-4 border-green-600 border-t-transparent rounded-full"
   />

 </div>

 )

}