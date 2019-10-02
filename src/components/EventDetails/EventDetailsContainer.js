import React, { Component } from 'react'
import EventDetails from './EventDetails'
import { connect } from 'react-redux'

class EventDetailsContainer extends Component {
  state = { 
    eventDetails: null,
  }

  showDetails = (e) => {
    const eventDetails = this.props.events.find(event => event.id === e.currentTarget.dataset.event_id) 
    this.setState({ eventDetails: eventDetails})
  }

  closeDetails = () => {
    this.setState({ eventDetails: null })
  }


  render() {
    
    return (
      <div>
        <EventDetails
        events={this.props.events}
        rightDate={this.props.rightDate}
        eventDetails={this.state.eventDetails}
        showDetails={this.showDetails}
        closeDetails={this.closeDetails}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    rightDate: state.rightDate
  }
}

export default connect(mapStateToProps)(EventDetailsContainer)