import React, { Component } from 'react';

class ResetPasswordForm extends Component {
  render() {
    console.log("PROPS", this.props)
    return (
      <div className="form-container">
        <form onSubmit={this.props.onSubmit}>
          <h2>Reset Password</h2>
          <label>
            New password:
          <input
              type='password'
              value={this.props.values.new_password}
              name='new_password'
              placeholder='enter password'
              onChange={this.props.onChange}
            />
          </label>
          <button type='submit'>Reset Password</button>

        </form>
      </div>
    );
  }
}

export default ResetPasswordForm;