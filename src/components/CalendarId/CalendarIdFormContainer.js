import React from 'react'
import CalendarIdForm from './CalendarIdForm'
import { connect } from 'react-redux'
import lscache from 'lscache'
import { fetchCalendars } from '../../actions_beta/fetchCalendars'
import { setupGoogleCalendar } from '../../actions_beta/setupGoogleCalendar'

class CalendarIdFormContainer extends React.Component {
  state = {
    calendar_id: '',
    password: ''
  }

  componentDidMount() {
    const user = lscache.get('user')
    if (!user) {
      return
    }
    this.props.fetchCalendars()
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.props.setupGoogleCalendar(this.state.calendar_id, this.state.password)
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


const mapDispatchToProps = {
  fetchCalendars,
  setupGoogleCalendar
}

const mapStateToProps = (reduxState) => {
  return {
    calendar: reduxState.events
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarIdFormContainer)