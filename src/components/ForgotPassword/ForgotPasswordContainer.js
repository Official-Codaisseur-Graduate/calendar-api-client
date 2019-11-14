import React, { Component } from 'react';
import { connect } from 'react-redux';

import ForgotPassword from './ForgotPassword'
import request from "superagent"
import { baseUrl } from "../../constants"
import { handleResult } from "../../actions"

class ForgotPasswordContainer extends Component {
  state = {
    email: ""
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    // console.table(event.target)
    request.post(`${baseUrl}/forgot-password`)
      .send({
        email: this.state.email,
        // password: this.state.password,
      })
      .then(response => {
        console.log("EMAIL", response)
        this.props.handleResult(response)
        this.props.history.push('/')
      })
      .catch(error => this.props.handleResult(error.response))
  }


  render() {
    return <ForgotPassword
      onChange={this.onChange}
      values={this.state}
      onSubmit={this.onSubmit}

    />
  }
}

export default connect(
  null, { handleResult }
)(ForgotPasswordContainer);