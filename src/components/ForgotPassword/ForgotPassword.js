import React, { Component } from 'react';

class ForgotPassword extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <h2>Forgot Password</h2>
          <p>Enter your email address, and we'll send you a password reset email.</p>
          <label>
            Email:
          <input
              type='text'
              value={this.props.email}
              name='email'
              placeholder='enter email'
              onChange={this.props.onChange}
            />
          </label>
          <button type='submit'>Send</button>

        </form>
      </div>
    );
  }
}

export default ForgotPassword;