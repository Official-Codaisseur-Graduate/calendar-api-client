import React from 'react'
import { connect } from 'react-redux'
import ForgotPassword from './ForgotPassword'
import { forgotPassword } from '../../actions/password'

class ForgotPasswordContainer extends React.Component {
  state = {
    email: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    // console.table(event.target)
    this.props.forgotPassword(this.state.email)
    this.props.history.push('/')
  }

  cancel = event => {
    event.preventDefault()
    this.props.history.push('/')
  }


  render() {
    return <ForgotPassword
      onChange={this.onChange}
      values={this.state}
      onSubmit={this.onSubmit}
      cancel={this.cancel}
    />
  }
}

export default connect(null, {forgotPassword})(ForgotPasswordContainer)