import React from 'react'
import EventDetails from './EventDetails'
import { connect } from 'react-redux'
import { fetchEvents } from '../../actions_beta/fetchEvents'
import { selectDate } from '../../actions_beta/selectDate'

class EventDetailsContainer extends React.Component {
  state = { 
    eventDetails: null,
  }

  showDetails = (e) => {
    const eventDetails = this.props.events.find(event => event.id === e.currentTarget.dataset.event_id) 
    this.setState({ eventDetails })
  }

  closeDetails = () => {
    this.setState({ eventDetails: null })
  }

  render() {
    // console.log('this.props', this.props);

    if(!this.props) {
      return 'Loading'
    }
    
    return <EventDetails
      events={this.props.events}
      rightDate={this.props.rightDate}
      eventDetails={this.state.eventDetails}
      showDetails={this.showDetails}
      closeDetails={this.closeDetails}
    />
      
  }
}

const mapDispatchToProps = {
  fetchEvents,
  selectDate
}

const mapStateToProps = (reduxState) => {
  return {
    events: reduxState.events,
    rightDate: reduxState.rightDate
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsContainer)