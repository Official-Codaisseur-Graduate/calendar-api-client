import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../forms.css';

export default function Profile(props) {
    const user = props.user;
    console.log(props);
    if (user) {
        return (
            <div>
                {!props.editView && (
                    <>
                        <h2>Your profile</h2>
                        {props.changes && <p>Changes saved successfully !</p>}
                        <div>
                            <img src={user.profilePic} alt="profilePic" />
                        </div>
                        <p>Your Name : {user.name}</p>
                        {user.rank === 0 && (
                            <p>Your Rank : {user.rank} - Unauthorized </p>
                        )}
                        {user.rank === 1 && (
                            <p>Your Rank : {user.rank} - Student </p>
                        )}
                        {user.rank === 2 && (
                            <p>Your Rank : {user.rank} - Assistant </p>
                        )}
                        {user.rank === 3 && (
                            <p>Your Rank : {user.rank} - Teacher </p>
                        )}
                        {user.rank === 4 && (
                            <p>Your Rank : {user.rank} - Admin </p>
                        )}

                        <Button
                            variant="danger"
                            onClick={() => props.editMode()}
                        >
                            Edit your profile
                        </Button>
                    </>
                )}
                {props.editView && (
                    <div className="form">
                        <h2>Edit your profile</h2>
                        <Form onSubmit={props.onSubmit}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>First and last name: </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Please enter your names"
                                    value={props.name}
                                    onChange={props.onChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicProfilePic">
                                <Form.Label>
                                    Link to your profile picture:
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="profilePic"
                                    placeholder="Upload an image to a hosting website and paste the link here"
                                    value={props.profilePic}
                                    onChange={props.onChange}
                                />
                                <Button variant="danger" type="submit">
                                    Submit changes
                                </Button>
                                <Form.Text className="text-muted">
                                    <Link
                                        to="/profile"
                                        onClick={() => props.backToProfile()}
                                    >
                                        Back to Profile
                                    </Link>
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </div>
                )}
            </div>
        );
    } else {
        return 'Loading';
    }
}
