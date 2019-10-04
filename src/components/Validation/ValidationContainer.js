import React, { Component } from 'react'
import Validation from './Validation'
import request from "superagent"
import { baseUrl } from "../../constants"
import { connect } from "react-redux"
import { handleResult } from "../../actions"

class ValidationContainer extends Component {

state = { 
  name: "",
  password: ""  
  }

onChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

onSubmit = event => {
  event.preventDefault()
  request.post(`${baseUrl}/registervalidation`)
    .set('validation', `${this.props.match.params.code}`)
    .send({
      name: this.state.name,
      password: this.state.password,
    })
    .then(response => {
      this.props.handleResult(response)
    })
    .catch(error => this.props.handleResult(error.response))
}

  componentDidMount() {
    request.get(`${baseUrl}/validation`)
      .set('validation', `${this.props.match.params.code}`)
      .send()
      .then(response => {
        this.props.handleResult(response)
      })
      .catch(error => this.props.handleResult(error.response))
  }

  render() {
    return (
      <div>
        <Validation
          validationType={this.props.validationType}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    )
  }
}

const mapstateToProps = (state) => {
  return {
    validationType: state.validationType
  }
}

const mapDispatchToProps = { handleResult }

export default connect(mapstateToProps, mapDispatchToProps)(ValidationContainer)