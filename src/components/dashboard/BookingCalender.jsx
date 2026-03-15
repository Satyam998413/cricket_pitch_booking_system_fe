import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function BookingCalendar({events}){

 return(

 <Calendar
 localizer={localizer}
 events={events}
 startAccessor="start"
 endAccessor="end"
 style={{height:500}}
 />

 )

}