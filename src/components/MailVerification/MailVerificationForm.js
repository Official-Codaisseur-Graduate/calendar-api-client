import React from 'react'

export default class MailVerificationForm extends React.Component {

  render(){
    return (
    <form className="form" onSubmit={this.props.onSubmit}>
      
      <h2>Setup mail verification</h2>
      <p>This is the email that is used to send verification links to new users</p>
      <p>Enter first the email adres you want to use with the password that belongs to that email.</p>
      <p>Then enter your password for this account</p>
      
      <p>
        <label>Email:</label><br/>
        <input 
          type='text' 
          value={this.props.send_email} 
          name='send_email' 
          placeholder='Enter email' 
          onChange={this.props.onChange} 
          />
      </p>

      <p>
        <label>Email password:</label><br/>
        <input
          type='password' 
          value={this.props.send_password} 
          name='send_password' 
          placeholder='Enter email password' 
          onChange={this.props.onChange} 
        />
      </p>
      
      <p>
        <label>Admin password:</label><br/>
        <input
          type='password'
          value={this.props.password}
          name='password'
          placeholder='Enter admin password'
          onChange={this.props.onChange}
        /> <span>(Admin password for validation)</span>
      </p>
       
      <button type='submit'>Submit mail verification</button>

    </form>
  )}
}