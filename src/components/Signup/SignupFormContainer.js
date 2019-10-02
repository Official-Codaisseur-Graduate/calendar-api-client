import React from 'react'
import SignupForm from './SignupForm'
import request from 'superagent'
const { url } = require('../../constants')

export default class SignupFormContainer extends React.Component {
  state = { email: '', password: '' }

  signUp = (email, password) => {
    request
      .post(`${url}/user`)
      .send({ email, password })
      .then(res => {
        console.log(res.body)
      })
      .catch(console.error)
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.signUp(this.state.email, this.state.password)
    this.props.history.push('/login')
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    return <SignupForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
  }
}