import React from 'react';
import moment from 'moment';
import lscache from 'lscache';
import { connect } from 'react-redux';
import EventDetailsContainer from '../EventDetails/EventDetailsContainer';
import './calendar.scss';
import Calendar from './Calendar';
import { logout } from '../../actions/logout';
import { fetchEvents } from '../../actions/fetchEvents';
import { selectDate } from '../../actions/selectDate';

class CalendarContainer extends React.Component {
  state = {
    showMonthTable: false,
    showDateTable: true,
    dateObject: moment(),
    selectedDay: null
  };

  showMonth = () => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    });
  };

  setMonth = month => {
    let monthNo = moment.months().indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set('month', monthNo);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    });
  };

  onPrev = () => {
    this.setState({
      dateObject: this.state.dateObject.subtract(1, 'month')
    });
  };

  onNext = () => {
    this.setState({
      dateObject: this.state.dateObject.add(1, 'month')
    });
  };

  onPrevYear = () => {
    this.setState({
      dateObject: this.state.dateObject.subtract(1, 'year'),
      showMonthTable: true,
      showDateTable: false
    });
  };

  onNextYear = () => {
    this.setState({
      dateObject: this.state.dateObject.add(1, 'year'),
      showMonthTable: true,
      showDateTable: false
    });
  };

  onDayClick = (event, day) => {
    this.setState(
      {
        selectedDay: day
      },
      () => {
        // console.log(`${this.state.dateObject.format("Y")}/${this.state.dateObject.format("MM")}/${this.state.selectedDay}`);

        const year = this.state.dateObject.format('Y');
        const month = this.state.dateObject.format('MM');
        const day = this.state.selectedDay;

        this.props.fetchEvents(year, month, day);
        this.props.selectDate(year, month, day);
      }
    );
  };

  onClickLogout = event => {
    this.props.logout();
  };

  componentDidMount() {
    // console.log('local state' , this.state);
    // console.log(`${this.state.dateObject.format("Y")}/${this.state.dateObject.format("MM")}/${Number(this.state.dateObject.format("D"))}`);

    const year = this.state.dateObject.format('Y');
    const month = this.state.dateObject.format('MM');
    const day = Number(this.state.dateObject.format('D'));

    this.props.fetchEvents(year, month, day);
    this.props.selectDate(year, month, day);
  }

  render() {
    const user = lscache.get('user');

    if (user.rank === 0) {
      return (
        <>
          <button onClick={this.onClickLogout}>Logout</button>
          <p>{this.props.error}</p>
          <h2>Please ask a teacher to help you out.</h2>
        </>
      );
    }
    return (
      <>
        <Calendar
          onPrev={this.onPrev}
          showMonthTable={this.state.showMonthTable}
          showMonth={this.showMonth}
          onNext={this.onNext}
          showDateTable={this.state.showDateTable}
          dateObject={this.state.dateObject}
          onDayClick={this.onDayClick}
          setMonth={this.setMonth}
          onPrevYear={this.onPrevYear}
          onNextYear={this.onNextYear}
          onClickLogout={this.onClickLogout}
        />
        <EventDetailsContainer />
      </>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    error: reduxState.error
  };
};

const mapDispatchToProps = {
  logout,
  fetchEvents,
  selectDate
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
