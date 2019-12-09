import lscache from 'lscache';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import CodaisseurCalendar from './CodaisseurCalendar';
import { fetchEvents } from '../../actions/fetchEvents';
import { selectDate } from '../../actions/selectDate';
import { beAssistant } from '../../actions/beAssistantRequest';
import { fetchUsers } from '../../actions/fetchUsers';

class CodaisseurCalendarContainer extends Component {
  user = lscache.get('user');

  state = {
    selectedEvent: null
  };

  onSelectEvent = event => {
    this.setState({ selectedEvent: event });
  };

  //When user navigates through months,
  //the month is calculated by date and
  //events are fetched for this specific month only.
  //Also hide previous selected event info.
  onNavigate = date => {
    const transformedDate = moment(date);
    const year = transformedDate.year();
    const month = transformedDate.month();
    this.props.selectDate(year, month);
    this.props.fetchEvents(year, month);
    this.setState({ selectedEvent: null });
  };

  componentDidMount = () => {
    const now = moment();
    const year = now.year();
    const month = now.month();
    this.props.selectDate(year, month);
    this.props.fetchEvents(year, month);
    this.props.fetchUsers();
  };

  closeEvent = () => {
    this.setState({ selectedEvent: null });
  };

  render() {
    return (
      <div className='calendar-wrapper'>
        <CodaisseurCalendar
          onSelectEvent={this.onSelectEvent}
          onNavigate={this.onNavigate}
          onSelectSlot={this.onSelectSlot}
          events={this.props.events}
          selectedEvent={this.state.selectedEvent}
          beAssistant={this.props.beAssistant}
          closeEvent={this.closeEvent}
          user={this.user}
          users={this.props.users}
        />
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    events: reduxState.events,
    users: reduxState.users
  };
};
export default connect(mapStateToProps, {
  fetchEvents,
  selectDate,
  beAssistant,
  fetchUsers
})(CodaisseurCalendarContainer);
