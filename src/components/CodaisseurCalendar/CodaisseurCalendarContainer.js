import React, { Component } from 'react';
import CodaisseurCalendar from './CodaisseurCalendar';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/fetchEvents';
import { selectDate } from '../../actions/selectDate';
import { beAssistant } from '../../actions/beAssistantRequest';
import { fetchUsers } from '../../actions/fetchUsers';
import moment from 'moment';
import lscache from 'lscache';

class CodaisseurCalendarContainer extends Component {
  user = lscache.get('user');
  state = {
    selectedEvent: null,
    assistantRequest: false
  };

  onSelectEvent = event => {
    this.setState({ selectedEvent: event });
  };

  onSelectSlot = slot => {
    console.log(slot);
  };

  onNavigate = date => {
    this.setState({ selectedEvent: null });
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
    this.props.fetchUsers();
  };

  closeEvent = () => {
    this.setState({ selectedEvent: null });
  };
  onAssistantRequest = (teacherMail, event) => {
    this.props.beAssistant(teacherMail, event);
    this.setState({
      assistantRequest: true
    });
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
          assistantRequest={this.state.assistantRequest}
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
