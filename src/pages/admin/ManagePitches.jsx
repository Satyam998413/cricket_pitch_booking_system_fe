import { useGetPitchesQuery } from "../../api/pitchApi"

export default function ManagePitches(){

 const {data:pitches} = useGetPitchesQuery()

 return(

 <div>

 <h2 className="text-2xl font-bold mb-6">
  Manage Pitches
 </h2>

 <table className="w-full border">

 <thead>
 <tr className="bg-gray-100">
  <th>Name</th>
  <th>Location</th>
  <th>Price</th>
 </tr>
 </thead>

 <tbody>

 {pitches?.map((pitch)=>(
  <tr key={pitch.id} className="border-t">

   <td>{pitch.name}</td>
   <td>{pitch.location}</td>
   <td>₹{pitch.price_per_hour}</td>

  </tr>
 ))}

 </tbody>

 </table>

 </div>

 )

}