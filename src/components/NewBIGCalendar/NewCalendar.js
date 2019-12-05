import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

export default function NewCalendar(props) {
    return (
        <div>
            <Calendar
                views={['month']}
                onSelectEvent={props.onSelectEvent}
                onNavigate={props.onNavigate}
                localizer={localizer}
                events={props.events}
                onSelectSlot={props.onSelectSlot}
                startAccessor="start"
                endAccessor="end"
                selectable
                style={{ height: '750px' }}
            />
        </div>
    );
}
