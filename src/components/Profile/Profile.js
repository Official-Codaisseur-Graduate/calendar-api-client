import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../forms.css';
import './profile.css';

export default function Profile(props) {
  const user = props.user;
  console.log('props', props);
  if (user) {
    return (
      <div>
        <h1>Your profile</h1>
        {!props.editView && (
          <div className='profile'>
            {props.changes && <p>Changes saved successfully!</p>}

            <img
              src={user.profilePic}
              alt="That's you!"
              title="That's you!"
              className='profile-pic'
            />

            <p>
              <h5>Your name</h5>
              {user.name}
            </p>
            <p>
              <h5>Your role </h5>

              {user.rank === 0 && (
                <>
                  {' '}
                  You are unauthorized. Please contact a teacher to fix that.
                  You cannot view the Codaisseur calendar.
                </>
              )}
              {user.rank === 1 && (
                <>
                  You are a student. You can view the Codaisseur calendar and
                  see which teacher is teaching when and when all the cool
                  events happen.
                </>
              )}
              {user.rank === 2 && (
                <>
                  You are an assistant. You can view the calendar and you can
                  assist a teacher with their lessons.
                </>
              )}
              {user.rank === 3 && (
                <>
                  You are a teacher. You can change the ranks of newly signed up
                  students and assign the role of a teacher's assistant to
                  students.
                </>
              )}
              {user.rank === 4 && (
                <>
                  You are the admin. You can change the application settings and
                  assign roles to everyone signed up.
                </>
              )}
            </p>
            <Button variant='danger' onClick={() => props.editMode()}>
              Edit your profile
            </Button>
          </div>
        )}
        {props.editView &&
          (props.message === 'Not changes made...' || !props.message) && (
            <div className='form'>
              <h2>Edit your profile</h2>
              <Form onSubmit={props.onSubmit}>
                <Form.Group controlId='formBasicName'>
                  <Form.Label>First and last name: </Form.Label>
                  <Form.Control
                    type='text'
                    name='name'
                    placeholder={props.user.name}
                    value={props.name}
                    onChange={props.onChange}
                  />
                </Form.Group>

                <Form.Group controlId='formBasicProfilePic'>
                  <Form.Label>Link to your profile picture:</Form.Label>
                  <Form.Control
                    type='text'
                    name='profilePic'
                    placeholder={props.user.profilePic}
                    value={props.profilePic}
                    onChange={props.onChange}
                  />
                  <Button variant='danger' type='submit'>
                    Submit changes
                  </Button>
                  <Form.Text className='text-muted'>
                    <Link to='/profile' onClick={() => props.backToProfile()}>
                      Back to Profile
                    </Link>
                  </Form.Text>
                </Form.Group>
              </Form>
            </div>
          )}
        {props.message !== 'Not changes made...' && props.message && (
          <Alert variant='success'>{props.message} </Alert>
        )}
        {props.message === 'Not changes made...' && (
          <Alert variant='danger'>{props.message} </Alert>
        )}
      </div>
    );
  } else {
    return 'Loading';
  }
}
