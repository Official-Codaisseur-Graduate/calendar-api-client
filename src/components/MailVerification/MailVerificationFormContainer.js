import React from 'react'
import MailVerificationForm from './MailVerificationForm'
import { connect } from 'react-redux'
import { handleResult } from '../../actions'
import { baseUrl } from "../../constants"
import request from "superagent"


class MailVerificationFormContainer extends React.Component {
  state = { send_email: '', send_password:'', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    request
      .post(`${baseUrl}/configemail`)
      .set('Authorization', `Bearer ${this.props.user.jwt}`)
      .send({ send_email: this.state.send_email, send_password: this.state.send_password, password: this.state.password })
      .then(this.props.handleResult)
      .catch(error => this.props.handleResult(error.response))
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { handleResult })(MailVerificationFormContainer)