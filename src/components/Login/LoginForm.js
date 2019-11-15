import React from 'react'
import { Link } from 'react-router-dom'
import CalendarContainer from '../Calendar/CalendarContainer'
import lscache from 'lscache'
import Button from '@material-ui/core/Button';

export default class LoginForm extends React.Component {
  render() {
    const user = lscache.get('user')
    // console.log('user from localStorage', user);

    if (!user) {
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
          <Button variant="contained" color="primary" type='submit'> Submit </Button> 
        <p>
          <Button variant="contained" color="primary" type='submit'> 
            <Link to={'/forgotpassword'}>Forgot password?</Link> 
          </Button>
        <br></br><br></br>
          <Button variant="contained" color="primary" type='submit'> 
            <Link to={'/signup'}>Signup</Link> 
          </Button>
        
         </p>
      </form>
    }
    else if (user.rank === 4) {
      return <>
        <CalendarContainer/>
        <Link to="/admin"><button>Admin</button></Link>
      </>
    }
    else {
      return <CalendarContainer/>
    }
    
  }
}

