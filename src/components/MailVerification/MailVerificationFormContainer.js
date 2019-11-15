import React from 'react'
import MailVerificationForm from './MailVerificationForm'
import { connect } from 'react-redux'
import { configMailService } from '../../actions_beta/configMailService'

class MailVerificationFormContainer extends React.Component {
  state = { send_email: '', send_password:'', password: '' }

  onSubmit = (event) => {
    event.preventDefault()

    this.props.configMailService(this.state.send_email, this.state.send_password, this.state.password)
    
    this.setState({
      send_email: '',
      send_password: '',
      password: '',
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <MailVerificationForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      user={this.props.user}
    />
  }
}

const mapDispatchToProps = {
  configMailService
}

const mapStateToProps = (reduxState) => {
  return {
    // users: reduxState.users // example
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MailVerificationFormContainer)