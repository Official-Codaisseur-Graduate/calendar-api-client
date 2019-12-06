import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Moment from 'react-moment';

export default function EventDetails(props) {
  console.log(props.event);

  const allUsers = props.users;
  const event = props.event;
  console.log('allusers', allUsers);
  console.log('event', event);
  let teacher;
  let assistant;

  if (event.teacher) {
    teacher = allUsers.find(user => user.email === props.event.teacher.email);
  }

  if (event.assistant) {
    assistant = allUsers.find(
      user => user.email === props.event.assistant.email
    );
  }

  console.log('teacher', teacher);
  console.log('assistant', assistant);
  return (
    <div className=''>
      <Card
        bg='danger'
        text='white'
        style={{ width: '20rem' }}
        className='event-details'
      >
        <Card.Header>
          <Moment format='DD. MMMM YYYY'>{props.event.start}</Moment>
          <br />
          <Moment format='hh:mm'>{props.event.start}</Moment> -
          <Moment format='hh:mm'>{props.event.end}</Moment>
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.event.title}</Card.Title>
          <Card.Text>
            {props.event.description}
            {teacher && <span>Teacher: {teacher.name}</span>}

            {assistant && <span>Assistant: {assistant.name}</span>}
          </Card.Text>
          <nav className='buttons'>
            {props.user.rank === 2 && !props.assistantRequest && (
              <Button
                variant='success'
                onClick={() => props.onAssistantRequest(teacher.email, event)}
              >
                Want to assist?
              </Button>
            )}
            <Button onClick={() => props.closeEvent()} variant='light'>
              Close the event
            </Button>
          </nav>
        </Card.Body>
      </Card>
    </div>
  );
}
