import React from 'react'
import { connect } from 'react-redux'
import ResetPasswordForm from './ResetPasswordForm'
import { resetPassword } from '../../actions/password'

class ResetPasswordFormContainer extends React.Component {
  state = {
    new_password: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.resetPassword(this.props.match.params.code, this.props.match.params.email, this.state.new_password)
    this.props.history.push('/')
    this.setState({
      new_password: ''
    })
  }

  render() {
    return <ResetPasswordForm
      onChange={this.onChange}
      values={this.state}
      onSubmit={this.onSubmit}
    />
  }
}

export default connect(null, {resetPassword})(ResetPasswordFormContainer)