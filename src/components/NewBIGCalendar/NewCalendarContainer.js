import React, { Component } from 'react';
import NewCalendar from './NewCalendar';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/fetchEvents';

class NewCalendarContainer extends Component {
  onSelectEvent = event => {
    console.log(event);
  };
  onNavigate = event => {
    this.props.fetchEvents(event.getYear(), event.getMonth(), event.getDay());
  };
  render() {
    return (
      <NewCalendar
        onSelectEvent={this.onSelectEvent}
        onNavigate={this.onNavigate}
      />
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    events: reduxState.events
  };
};
export default connect(mapStateToProps, { fetchEvents })(NewCalendarContainer);
