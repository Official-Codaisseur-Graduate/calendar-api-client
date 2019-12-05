import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// This component is used for Sign Up after clicking on continue with registration in the gmail account
export default class Validation extends React.Component {
    render() {
        return (
            <div className="form">
                {!this.props.validationType ? null : (
                    <>
                        <h2>Success!</h2>
                        <p>You have confirmed your email</p>
                        <p>Please enter your personal info now: </p>
                        <Form onSubmit={this.props.onSubmit}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>First and last name: </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={this.props.name}
                                    name="name"
                                    placeholder="Please enter your names"
                                    onChange={this.props.onChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={this.props.password}
                                    name="password"
                                    placeholder="Enter password"
                                    minlength="8"
                                    onChange={this.props.onChange}
                                />
                            </Form.Group>
                            <Button variant="danger" type="submit">
                                Finish signup
                            </Button>
                            <Form.Text className="text-muted">
                                You can edit your profile later
                            </Form.Text>
                        </Form>
                    </>
                )}
            </div>
        );
    }
}
