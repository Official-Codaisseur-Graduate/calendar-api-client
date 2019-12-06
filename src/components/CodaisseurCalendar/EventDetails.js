import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Moment from 'react-moment';

export default function EventDetails(props) {
    return (
        <div className="">
            <Card
                bg="danger"
                text="white"
                style={{ width: '20rem' }}
                className="event-details"
            >
                <Card.Header>
                    <Moment format="DD. MMMM YYYY">{props.event.start}</Moment>
                    <br />
                    <Moment format="hh:mm">{props.event.start}</Moment> -
                    <Moment format="hh:mm">{props.event.end}</Moment>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{props.event.title}</Card.Title>
                    <Card.Text>
                        {props.event.description}
                        <span>Teacher</span>
                        <span>Assistant</span>
                    </Card.Text>
                    <nav className="buttons">
                        <Button
                            onClick={() => props.closeEvent()}
                            variant="light"
                        >
                            Close the event
                        </Button>
                    </nav>
                </Card.Body>
            </Card>
        </div>
    );
}
