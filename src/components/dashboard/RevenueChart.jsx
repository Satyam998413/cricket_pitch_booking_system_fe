import { LineChart,Line,XAxis,YAxis,Tooltip } from "recharts";

export default function RevenueChart({data}){

return(

<LineChart width={700} height={300} data={data}>

<XAxis dataKey="date"/>
<YAxis/>
<Tooltip/>

<Line
type="monotone"
dataKey="revenue"
strokeWidth={3}
/>

</LineChart>

)

}