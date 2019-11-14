import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { handleResult } from '../../actions'
import { baseUrl } from '../../constants'
import request from 'superagent'

class LoginFormContainer extends React.Component {
  state = {
    email: '',
    password: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    // this.props.login(this.state.email, this.state.password)

    request
      .post(`${baseUrl}/login`)
      .send({
        email: this.state.email,
        password: this.state.password
      })
      .then(this.props.handleResult)
      .catch(error => this.props.handleResult(error.response))
    this.setState({
      email: '',
      password: '',
    })
  }

  render() {
    return <LoginForm
      onSubmit = {this.onSubmit}
      onChange = {this.onChange}
      values = {this.state}
      user = {this.props.user}
    />
  }
}

const mapStateToProps = (reduxState) => {
  console.log('Redux state >', reduxState);
  return {
    user: reduxState.user
  }
}

export default connect(mapStateToProps, {handleResult})(LoginFormContainer)