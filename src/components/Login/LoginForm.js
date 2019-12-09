import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

import DocumentTitle from '../DocumentTitle/DocumentTitle';

export default class LoginForm extends React.Component {
  render() {
    return (
      <>
        <DocumentTitle title='Login' />
        <div className='form'>
          <h2>Login</h2>
          <Form onSubmit={this.props.onSubmit}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='text'
                name='email'
                placeholder='Enter email'
                value={this.props.email}
                onChange={this.props.onChange}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                value={this.props.password}
                name='password'
                placeholder='Enter password'
                onChange={this.props.onChange}
              />
              <Button variant='danger' type='submit'>
                Submit
              </Button>
              <Form.Text className='text-muted'>
                <Link to='/forgotpassword'>Forgot your password?</Link>
              </Form.Text>
              <Form.Text className='text-muted'>
                <Link to='/signup'>Don't have an account yet?</Link>
              </Form.Text>
            </Form.Group>
          </Form>

          {this.props.message && (
            <Alert variant='danger'>{this.props.message} </Alert>
          )}
        </div>
      </>
    );
  }
}
