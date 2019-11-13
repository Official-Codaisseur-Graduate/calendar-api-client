import React from 'react'

export default class SignupForm extends React.Component {
  
  render() {
    return <form onSubmit={this.props.onSubmit}>
      <h2>Sign up</h2>
      <p>
        <label>Email:</label><br/>
        <input
          type='text'
          value={this.props.email}
          name='email'
          placeholder='enter email'
          onChange={this.props.onChange}
        />
      </p>
      
      <button type='submit'>Sign up</button>
    </form>
  }
}