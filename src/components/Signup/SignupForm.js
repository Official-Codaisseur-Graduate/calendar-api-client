import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import DocumentTitle from '../DocumentTitle/DocumentTitle';

export default class SignupForm extends React.Component {
    render(props) {
        return (
            <>
                {' '}
                <DocumentTitle title="Sign up" />
                <div className="form">
                    <h2>Sign up</h2>
                    <p>
                        After confirming the email you will be able to setup
                        your account.
                    </p>
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
                                Sign up
                            </Button>
                            <Form.Text className="text-muted">
                                <Link to="/login">
                                    Already have an account?{' '}
                                </Link>
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </div>
            </>
        );
    }
}
