import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEvents } from '../../actions'
import EventButton from './EventButton'

class EventButtonContainer extends Component {
  render() {
    return (
      <div>
        <EventButton 
        getEvents={this.props.getEvents}
        />
      </div>
    )
  }
}

export default connect(null, { getEvents })(EventButtonContainer)