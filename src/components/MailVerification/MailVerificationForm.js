import React from 'react'


export default class MailVerificationForm extends React.Component {

  render(){
    return (
      <div className="form-container">
      <form className="form" onSubmit={this.props.onSubmit}>
      
      <h2>Setup mail verification</h2>
      <p>This is the email that is used to send verification links to new users</p>
      <p>Enter first the email adres you want to use with the password that belongs to that email.</p>
      <p>Then enter your password fot this account</p>

        <label>
          Email:
          <input 
          type='text' 
          value={this.props.send_email} 
          name='send_email' 
          placeholder='enter email' 
          onChange={this.props.onChange} 
          />
        </label>
        <label>
          Password:
          <input 
          type='password' 
          value={this.props.send_password} 
          name='send_password' 
          placeholder='enter email password' 
          onChange={this.props.onChange} 
          />
        </label>
        <label>
          Password:
          <input
          type='password'
          value={this.props.password}
          name='password'
          placeholder='enter account password'
          onChange={this.props.onChange}
          />
        </label>
        <button type='submit'>Submit mail verification</button>
      </form> 
    </div>
  )}
}