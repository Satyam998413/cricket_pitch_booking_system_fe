import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function PitchMap({pitches}){

return(

<MapContainer
center={[21.1702,72.8311]}
zoom={12}
style={{height:"500px"}}
>

<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

{pitches.map(pitch=>(
<Marker key={pitch._id} position={[pitch.lat,pitch.lng]}>
<Popup>

<h3>{pitch.name}</h3>
<p>{pitch.location}</p>

</Popup>
</Marker>
))}

</MapContainer>

)

}