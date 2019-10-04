import React from "react"
import { connect } from "react-redux"
import request from "superagent"

import SignupForm from "./SignupForm"
import { baseUrl } from "../../constants"
import { handleResult } from "../../actions"

class SignupFormContainer extends React.Component {
  state = { email: "", password: "" }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    request.post(`${baseUrl}/register`)
      .send({
        email: this.state.password,
        password: this.state.password,
      })
      .then(this.props.handleResult)
      .catch(error => this.props.handleResult(error.response))
  }

  render() {
    return <SignupForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
  }
}

const mapDispatchToProps = { handleResult }

export default connect(null, mapDispatchToProps)(SignupFormContainer)