import React from "react"
import { connect } from "react-redux"
import request from "superagent"
import SignupForm from "./SignupForm"
import { baseUrl } from "../../constants"
import { handleResult } from "../../actions"

class SignupFormContainer extends React.Component {
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
    request.post(`${baseUrl}/register`)
      .send({
        email: this.state.email,
        // password: this.state.password,
      })
      .then(response => {
        this.props.handleResult(response)
        this.props.history.push('/')
      })
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

const mapDispatchToProps = {
  handleResult
}

export default connect(null, mapDispatchToProps)(SignupFormContainer)