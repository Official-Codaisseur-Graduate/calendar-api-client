import React from 'react'

export default class SignupForm extends React.Component {

  render() {
    return <div className="form-container">
      <form className="form" onSubmit={this.props.onSubmit}>

        <h2>Sign up</h2>

        <label>
          Email:
          <input
            type='text'
            value={this.props.email}
            name='email'
            placeholder='enter email'
            onChange={this.props.onChange}
          />
        </label>

        {/* <label>
          password:
          <input
            type='text'
            value={this.props.password}
            name='password'
            placeholder='enter password'
            onChange={this.props.onChange}
          />
        </label> */}
        <button type='submit'>Sign up</button>

      </form>
    </div>
  }
}