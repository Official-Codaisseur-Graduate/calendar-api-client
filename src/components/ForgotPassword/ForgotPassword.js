import React from 'react'

class ForgotPassword extends React.Component {
  render() {
    return <form onSubmit={this.props.onSubmit}>
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
        <button type='cancel' onClick={this.props.cancel}>Cancel</button>
    </form>
  }
}

export default ForgotPassword;