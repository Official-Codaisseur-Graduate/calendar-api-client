import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class MailVerificationForm extends React.Component {
    render() {
        return (
            <Form className="form" onSubmit={this.props.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <h3 className="header-settings">Setup mail verification</h3>

                    <Form.Label>Verification email: </Form.Label>
                    <Form.Control
                        type="text"
                        name="send_email"
                        placeholder="Email"
                        value={this.props.send_email}
                        onChange={this.props.onChange}
                    />
                    <Form.Text className="text-muted">
                        This is the email that is used to send verification
                        links to new users.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Email's password: </Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.props.send_password}
                        onChange={this.props.onChange}
                    />
                    <Form.Text className="text-muted">
                        Enter here the password for the Google mail's account.
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
        );
    }
}
