import React from 'react'
import ConfigForm from './ConfigForm'
import { connect } from 'react-redux'
import lscache from 'lscache'
import { GoogleCalendarApiConfig } from '../../actions_beta/GoogleCalendarApiConfig'

class ConfigFormContainer extends React.Component {
  state = {
    client_email: '',
    private_key: '',
    password: ''
  }

  onSubmit = (event) => {
    event.preventDefault()
    const user = lscache.get('user')

    console.log('user', user);

    this.props.GoogleCalendarApiConfig(this.state.client_email, this.state.private_key, this.state.password)
    
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

const mapDispatchToProps = {
  GoogleCalendarApiConfig
}

export default connect(null, mapDispatchToProps)(ConfigFormContainer)