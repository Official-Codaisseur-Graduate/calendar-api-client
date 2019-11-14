import React from 'react'
import { Link } from 'react-router-dom'
import CalendarContainer from '../Calendar/CalendarContainer'

export default class LoginForm extends React.Component {
  render() {
    if ( !this.props.user.jwt ) {
      return <form onSubmit={this.props.onSubmit}>
        <h2>Login</h2>
        <p>
          <label>Email:</label><br/>
          <input
            type='text'
            value={this.props.email}
            name='email'
            placeholder='Enter email'
            onChange={this.props.onChange}
          />
        </p>
        
        <p>
          <label>Password:</label><br/>
          <input
            type='password'
            value={this.props.password}
            name='password'
            placeholder='Enter password'
            onChange={this.props.onChange}
          />
        </p>
        
        <button type='submit'>Login</button>
        <p>
          <Link to={'/forgotpassword'}>Forgot password?</Link>
          Or sign up <Link to={'/signup'}>here</Link>
         </p>
      </form>
    }
    else {
      return <>
        <CalendarContainer />
        {this.props.user.rank === 4 &&
        <Link to="/admin"><button>Admin</button></Link>}
      </>
    }
  }
}