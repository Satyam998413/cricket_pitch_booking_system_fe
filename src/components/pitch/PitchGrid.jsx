import PitchCard from "./PitchCard"

export default function PitchGrid({pitches,setPitch}){

 return(

 <div className="grid grid-cols-3 gap-6">

  {pitches?.map((pitch)=>(
   <PitchCard key={pitch._id} pitch={pitch} setPitch={setPitch}/>
  ))}

 </div>
 )

}