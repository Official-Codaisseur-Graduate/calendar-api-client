import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ForgotPassword extends React.Component {
    render() {
        return (
            <div className="form">
                <h2>Forgot your password?</h2>
                <Form onSubmit={this.props.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="Enter email"
                            value={this.props.email}
                            onChange={this.props.onChange}
                        />
                        <Button variant="danger" type="submit">
                            Send
                        </Button>
                        <Form.Text className="text-muted">
                            <Link to="/login">Back to login</Link>
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default ForgotPassword;
