import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../forms.css';

export default class ConfigForm extends React.Component {
    render() {
        return (
            <>
                <p>
                    If you setup your service account you get a client email and
                    a private key. You need both, plus your own password for
                    this website to make a connection with the Google Calendar
                    Api.
                </p>
                <p>
                    <strong>
                        You can get all the information from the .json file you
                        got earlier. Copy what's between the double qoutes and
                        paste them here.
                    </strong>
                </p>

                <Form className="form" onSubmit={this.props.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <h3 className="header-settings">
                            Google Calendar API configuration
                        </h3>

                        <Form.Label>Client email: </Form.Label>
                        <Form.Control
                            type="text"
                            name="client_email"
                            placeholder="Email"
                            value={this.props.client_email}
                            onChange={this.props.onChange}
                        />
                        <Form.Text className="text-muted">
                            (Example:
                            admin-calendar@example-library-2712.iam.gserviceaccount.com)
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Private key:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            name="private_key"
                            value={this.props.private_key}
                            onChange={this.props.onChange}
                        />
                        <Form.Text className="text-muted">
                            (Copy paste everything between the quotes. <br />
                            Including the following: ----BEGIN PRIVATE
                            KEY-----............-----END PRIVATE KEY-----\n)
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
            </>
        );
    }
}
