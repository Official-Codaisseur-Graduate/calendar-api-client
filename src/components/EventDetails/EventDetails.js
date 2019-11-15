import React, { Component } from 'react'
import lscache from 'lscache'
import './eventDetails.scss'

export default class EventDetails extends Component {

  render() {
    const user = lscache.get('user')
    console.log('user', user);

    if(!user) {
      return 'Loading'
    }
    else if (user.rank === 0) {
      return 'No access, please ask a teacher to help you out.'
    }
    
    return <div className='eventDetails'>
        {!this.props.eventDetails ? '' : 
            <div className="detailsBox" >
              <div className="eventTitleDetails" ><h4>{this.props.rightDate.day} - {this.props.rightDate.month} - {this.props.rightDate.year}</h4></div>
              <div className="eventTitleDetails" ><h4>{this.props.eventDetails.summary}</h4></div>
              <div className="eventDescription">{!this.props.eventDetails.description ? 
                <p>There is no description for this event.</p> : 
                <div><p>Description:</p><p>{this.props.eventDetails.description}</p></div>}
              </div>
              <div className="eventGuests">{!this.props.eventDetails.attendees ? 
              <p>There are no attendees for this event.</p> : 
              this.props.eventDetails.attendees.map(attendee => {
                return <div key={attendee.email}><p>Attendee:</p><p>{attendee.email}</p></div>
              })}</div>
              <div onClick={this.props.closeDetails} className="closeButton"><h2>X</h2></div>
            </div>}
        <div className='eventList'>    
        {!this.props.events ? <h3>Loading</h3> :
          <div>
          <div>
            <h3>Date: {this.props.rightDate.day} - {this.props.rightDate.month} - {this.props.rightDate.year}</h3>
          </div>
          
          <div className='eventDetailsWrapper'>{this.props.events.map(event => {
            return <div key={event.id} className='eventDetailsBox'>
              <div className="eventTitle" onClick={this.props.showDetails} data-event_id={event.id} ><h4>{event.summary}</h4></div>
              </div>})}
          </div></div>}
        </div>
    </div>
  }


}
