import React from 'react'
import { Link } from 'react-router-dom'
import CalendarContainer from '../Calendar/CalendarContainer'


export default class LoginForm extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div>
          {!this.props.user.jwt ?
            <div className="form-container">

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
                <button type='submit'>Login</button><br /><br />
                <Link to={'/forgotpassword'}>Forgot password?</Link>
                Or sign up <Link to={'/signup'}>here</Link>
              </form>

            </div> :
            <React.Fragment>
              <CalendarContainer />
              {this.props.user.rank === 4 &&
                <Link to="/adminpage/" ><button>AdminButton</button></Link>}
            </React.Fragment>}

        </div>
      </React.Fragment>
    )
  }
}