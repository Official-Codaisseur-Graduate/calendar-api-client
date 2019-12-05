import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer
const events = [
  {
    title: 'Test event 2',
    start: '2019-12-05T12:30:00+01:00',
    end: '2019-12-05T13:30:00+01:00'
  },
  {
    title: 'testevent3',
    start: '2019-12-05T14:30:00+01:00',
    end: '2019-12-05T19:15:00+01:00'
  },
  {
    title: 'Test event 1',
    start: '2019-12-05T19:45:00+01:00',
    end: '2019-12-05T20:45:00+01:00'
  },
  {
    title: 'Test event 1',
    start: '2020-01-05T19:45:00+01:00',
    end: '2020-01-05T20:45:00+01:00'
  }
];

export default function NewCalendar(props) {
  return (
    <div>
      <Calendar
        views={['month']}
        onSelectEvent={props.onSelectEvent}
        onNavigate={props.onNavigate}
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: '750px' }}
      />
    </div>
  );
}
