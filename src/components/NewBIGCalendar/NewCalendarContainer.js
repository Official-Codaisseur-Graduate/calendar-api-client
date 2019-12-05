import React, { Component } from 'react';
import NewCalendar from './NewCalendar';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/fetchEvents';
import { selectDate } from '../../actions/selectDate';
import moment from 'moment';
class NewCalendarContainer extends Component {
  state = {
    selectedEvent: null
  };

  onSelectEvent = event => {
    this.setState({ selectedEvent: event });
  };

  onSelectSlot = slot => {
    console.log(slot);
  };
  onNavigate = date => {
    const transformedDate = moment(date);
    console.log(transformedDate);
    const year = transformedDate.year();
    const month = transformedDate.month();
    this.props.selectDate(year, month);
    this.props.fetchEvents(year, month);
  };

  componentDidMount = () => {
    const now = moment();
    const year = now.year();
    const month = now.month();
    this.props.selectDate(year, month);
    this.props.fetchEvents(year, month);
  };

  render() {
    return (
      <NewCalendar
        onSelectEvent={this.onSelectEvent}
        onNavigate={this.onNavigate}
        onSelectSlot={this.onSelectSlot}
        events={this.props.events}
      />
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    events: reduxState.events
  };
};
export default connect(mapStateToProps, { fetchEvents, selectDate })(
  NewCalendarContainer
);
