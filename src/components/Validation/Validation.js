import React from 'react'


// This component is used for Sign Up after clicking on continue with registration in the gmail account
export default class Validation extends React.Component {
  render() {
    return <div>
        {!this.props.validationType ? 'loading...' :
         <div className="registrationWrapper" >
          <h2>Success!!</h2>
          <p>You have confirmed your email</p>
          <p>Please enter your personal info underneath</p>
          <form className="form" onSubmit={this.props.onSubmit}>
            <label>
              name:
              <input
                type='text'
                value={this.props.name}
                name='name'
                placeholder='Please enter your name'
                onChange={this.props.onChange}
              />
            </label>
            <label>
              password:
              <input
                type='password'
                value={this.props.password}
                name='password'
                placeholder='your password must be 8 characters long'
                onChange={this.props.onChange}
              />
            </label> 
            <button type='submit'>Sign up</button>
          </form>
         </div>
        }
       
    </div>
  }
}
