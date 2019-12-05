import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import DocumentTitle from '../DocumentTitle/DocumentTitle';

class ResetPasswordForm extends React.Component {
    render() {
        return (
            <>
                <DocumentTitle title="Reset your password" />
                <div className="form">
                    <h2>Reset your password</h2>
                    {this.props.message !== 'Password has changed' && (
                        <Form onSubmit={this.props.onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="new_password"
                                    placeholder="Enter password"
                                    value={this.props.values.new_password}
                                    onChange={this.props.onChange}
                                    minlength="8"
                                />
                                <Button variant="danger" type="submit">
                                    Change password
                                </Button>
                            </Form.Group>
                        </Form>
                    )}
                    {this.props.message === 'Password has changed' && (
                        <Alert variant="success">{this.props.message} </Alert>
                    )}
                    {this.props.message &&
                        this.props.message !== 'Password has changed' && (
                            <Alert variant="danger">
                                {this.props.message}{' '}
                            </Alert>
                        )}
                </div>
            </>
        );
    }
}

export default ResetPasswordForm;
