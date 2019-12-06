import React from 'react';
import { Button } from 'react-bootstrap';

export default function EventDetails(props) {
  return (
    <div>
      <h3>
        <u>Event</u>
      </h3>
      <p>{props.selectedEvent.title}</p>
      <h3>
        <u>Description</u>
      </h3>
      <p>{props.selectedEvent.description}</p>
      <h3>
        <u>Description</u>
      </h3>
      <p>{props.selectedEvent.start}</p>
      <h3>
        <u>Description</u>
      </h3>
      <p>{props.selectedEvent.end}</p>
      <Button onClick={() => props.closeEvent()} variant='danger'>
        Close
      </Button>
    </div>
  );
}
