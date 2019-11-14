import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResetPasswordForm from './ResetPasswordForm'
import request from "superagent"
import { baseUrl } from "../../constants"
import { handleResult } from "../../actions"

class ResetPasswordFormContainer extends Component {
  state = {
    new_password: ""
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    request.post(`${baseUrl}/reset-password`)
      .set('validation', `${this.props.match.params.code}`)
      .send({
        email: `${this.props.match.params.email}`,
        new_password: this.state.new_password,
      })
      .then(response => {
        // console.log("EMAIL", response)
        this.props.handleResult(response)
        this.props.history.push('/')
      })
      .catch(error => this.props.handleResult(error.response))
    this.setState({
      new_password: ""
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


export default connect(
  null, { handleResult }
)(ResetPasswordFormContainer);