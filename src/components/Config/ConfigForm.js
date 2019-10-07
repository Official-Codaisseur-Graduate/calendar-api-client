import React from 'react'


export default class ConfigForm extends React.Component {

  render(){
    return (
      <div className="form-container">
      <form className="form" onSubmit={this.props.onSubmit}>
      
      <h2>Setup configuration</h2>
      <p>If you setup your service account you get a client email and a private key.</p>
      <p>You need both, plus your own password for this website to make a connection with the Google Calendar Api</p>

        <label>
          Email:
          <input 
          type='text' 
          value={this.props.client_email} 
          name='send_email' 
          placeholder='enter email' 
          onChange={this.props.onChange} 
          />
        </label>
        <label>
          Private key:
          <input
          type='text'
          value={this.props.private_key}
          name='send_password'
          placeholder='enter key'
          onChange={this.props.onChange}
          />
        </label>
        <label>
          Password:
          <input
          type='password'
          value={this.props.password}
          name='password'
          placeholder='enter password'
          onChange={this.props.onChange}
          />
        </label>
        <button type='submit'>Submit configuration</button>
      </form> 
    </div>
  )}
}