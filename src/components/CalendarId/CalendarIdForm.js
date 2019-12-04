import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class CalendarIdForm extends React.Component {
    render() {
        return (
            <div className="form">
                <Form onSubmit={this.props.onSubmit}>
                    <Form.Group controlId="formBasicCalendarId">
                        <h3 className="header-settings">
                            Setup Google Calendar - Calendar ID
                        </h3>

                        <Form.Label>Calendar ID:</Form.Label>
                        <Form.Control
                            type="text"
                            name="calendar_id"
                            placeholder="Enter the Calendar ID"
                            vvalue={this.props.calendar_id}
                            onChange={this.props.onChange}
                        />
                        <Form.Text className="text-muted">
                            You can find the <strong>Calendar ID</strong> from
                            the Google Calendar under "Calendar settings" and
                            down under the section{' '}
                            <strong>"Integrate calendar"</strong> <br />
                            (Example: example@gmail.com or
                            codaisseur.com_repcdhtcgm95695p0nj15j21dg@group.calendar.google.com)
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Your admin password: </Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Enter admin password"
                            value={this.props.password}
                            onChange={this.props.onChange}
                        />
                        <Form.Text className="text-muted">
                            To confirm admin changes
                        </Form.Text>
                        <Button type="submit" variant="danger">
                            Submit settings
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
