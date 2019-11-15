import React from 'react'

class ResetPasswordForm extends React.Component {
  render() {
    return <form onSubmit={this.props.onSubmit}>
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
      <button type='cancel' onClick={this.props.cancel}>Cancel</button>
    </form>
    
  }
}

export default ResetPasswordForm;