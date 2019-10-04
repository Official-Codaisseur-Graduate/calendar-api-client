import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../actions'

class LoginFormContainer extends React.Component {
  state = { email: '', password: '', loggedIn: false }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
    this.setState({
      email: '',
      password: '',
      loggedIn: true
    })
    this.props.history.push('/')
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <LoginForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      user={this.props.user}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { login })(LoginFormContainer)