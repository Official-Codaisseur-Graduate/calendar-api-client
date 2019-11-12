import React from 'react'

export default class ConfigForm extends React.Component {

  render(){
    return (
      <div className="form-container">
      <form className="form" onSubmit={this.props.onSubmit}>
      
      <h2>Google Calendar Api configuration</h2>
      <p>If you setup your service account you get a client email and a private key.</p>
      <p>You need both, plus your own password for this website to make a connection with the Google Calendar Api.</p>
      <p><strong>You can get all the information from the .json file you got earlier. Copy what's between the double qoutes and paste them here.</strong></p>
      
      <p>
        <label>Client email:</label><br/>
        <input
          type='text'
          value={this.props.client_email}
          name='client_email'
          placeholder='Enter client email'
          onChange={this.props.onChange}
        /> <span>(Example: admin-calendar@example-library-2712.iam.gserviceaccount.com)</span>
      </p>
      
      <p>
        <label>Private key:</label><br/>
        <input
          type='text'
          value={this.props.private_key}
          name='private_key'
          placeholder='enter key'
          onChange={this.props.onChange}
        /> <span>(-----BEGIN PRIVATE KEY-----............-----END PRIVATE KEY-----\n)</span>
      </p>
      
      <p>
        <label>Password:</label><br/>
        <input
          type='password'
          value={this.props.password}
          name='password'
          placeholder='enter password'
          onChange={this.props.onChange}
        /> <span>(Admin password for validation)</span>
      </p>
      
      <button type='submit'>Submit configuration</button>
      </form> 
    </div>
  )}
}