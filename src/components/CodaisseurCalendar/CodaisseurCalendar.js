import React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import DocumentTitle from '../DocumentTitle/DocumentTitle';
import EventDetails from './EventDetails';

import CodaisseurLogo from '../../assets/codaisseur-logo.png';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';

const localizer = momentLocalizer(moment);

export default function CodaisseurCalendar(props) {
  return (
    <>
      <div className='main-calendar-container'>
        <DocumentTitle title='Calendar' />
        <h1>Codaisseur Academy Calendar</h1>
        <p>
          Here you can view the Codaisseur Calendar, see who is teaching what
          lesson on what day. If you are a teacher's assistant, you can also
          volunteer to help out on lessons!
        </p>
        <div className='calendar-wrap'>
          <div className='calendar'>
            <Calendar
              views={['month']}
              onSelectEvent={props.onSelectEvent}
              onNavigate={props.onNavigate}
              localizer={localizer}
              events={props.events}
              onSelectSlot={props.onSelectSlot}
              startAccessor='start'
              endAccessor='end'
              selectable
              popup
            />
          </div>

          {props.selectedEvent && (
            <div className='selected-event'>
              <h3>Event details</h3>
              <EventDetails
                event={props.selectedEvent}
                closeEvent={props.closeEvent}
                user={props.user}
                users={props.users}
                beAssistant={props.beAssistant}
              />
            </div>
          )}
          {!props.selectedEvent && (
            <div className='selected-event'>
              <h3>No event selected</h3>
              <p>
                For more information about an event, click the event on the
                calendar.
              </p>
              <img className='event-image' src={CodaisseurLogo} alt='' />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
