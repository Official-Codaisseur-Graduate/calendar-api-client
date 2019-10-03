import React from 'react'
import { Link } from 'react-router-dom'

export default class LoginForm extends React.Component {

  render(){
    return <div className="form-container">

      <form className="form" onSubmit={this.props.onSubmit}>
      
      <h2>Login</h2>

        <label>
          Email:
          <input 
          type='text' 
          value={this.props.email} 
          name='email' 
          placeholder='enter email' 
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
        <button type='submit'>Login</button>
        <p>Or sign up <Link to={'/signup'}>here</Link></p>
      </form>
      </div>
  }
}