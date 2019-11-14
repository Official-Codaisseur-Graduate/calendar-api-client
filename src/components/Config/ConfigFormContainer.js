import React from 'react'
import ConfigForm from './ConfigForm'
import { connect } from 'react-redux'
import { handleResult } from '../../actions'
import { baseUrl } from "../../constants"
import request from "superagent"
import lscache from 'lscache'

class ConfigFormContainer extends React.Component {
  state = { client_email: '', private_key:'', password: '' }

  onSubmit = (event) => {
    const user = lscache.get('user')
    event.preventDefault()
    request
      .post(`${baseUrl}/googleapi`)
      .set('Authorization', `Bearer ${user.jwt}`)
      .send({ client_email: this.state.client_email, private_key: this.state.private_key, password: this.state.password })
      .then(this.props.handleResult)
      .catch(error => this.props.handleResult(error.response))
    this.setState({
      client_email: '',
      private_key: '',
      password: '',
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <ConfigForm
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

export default connect(mapStateToProps, { handleResult })(ConfigFormContainer)