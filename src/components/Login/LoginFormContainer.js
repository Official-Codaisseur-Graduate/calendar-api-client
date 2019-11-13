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

  onSubmit = (event) => {
    event.preventDefault()
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

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
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

const mapStateToProps = (state) => {
  console.log('Redux state >', state);
  
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {handleResult})(LoginFormContainer)