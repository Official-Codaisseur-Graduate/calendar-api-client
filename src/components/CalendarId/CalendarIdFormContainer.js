import React from 'react'
import CalendarIdForm from './CalendarIdForm'
import { connect } from 'react-redux'
import { handleResult } from '../../actions'
import { baseUrl } from "../../constants"
import request from "superagent"


class CalendarIdFormContainer extends React.Component {
  state = { calendar_id: '', password: '' }

  componentDidMount(){
    request
    .get(`${baseUrl}/calendars`)
    .set('Authorization', `Bearer ${this.props.user.jwt}`)
    .then(response => this.props.handleResult(response))
    .catch(error => this.props.handleResult(error.response))
  }

  onSubmit = (event) => {
    event.preventDefault()
    request
      .post(`${baseUrl}/calendar`)
      .set('Authorization', `Bearer ${this.props.user.jwt}`)
      .send({ calendar_id: this.state.calendar_id, password: this.state.password})
      .then(this.props.handleResult)
      .catch(error => this.props.handleResult(error.response))
    this.setState({
      calendar_id: '',
      password: ''
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <CalendarIdForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      user={this.props.user}
      calendar={this.props.calendar}

    />
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    calendar: state.events
  }
}

export default connect(mapStateToProps, { handleResult })(CalendarIdFormContainer)