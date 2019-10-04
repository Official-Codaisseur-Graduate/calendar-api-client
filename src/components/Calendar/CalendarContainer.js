import React from "react";
import moment from "moment";
import "./calendar.css";
import Calendar from './Calendar'
import { connect } from 'react-redux'
import { getEvents, chosenDate } from '../../actions'
import EventDetailsContainer from '../EventDetails/EventDetailsContainer'

class CalendarContainer extends React.Component {

  state = {
    showMonthTable: false,
    showDateTable: true,
    dateObject: moment(),
    selectedDay: null,
  }

  showMonth = () => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    })
  }

  setMonth = month => {
    let monthNo = moment.months().indexOf(month)
    let dateObject = Object.assign({}, this.state.dateObject)
    dateObject = moment(dateObject).set("month", monthNo)
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    })
  }

  onPrev = () => {
    this.setState({
      dateObject: this.state.dateObject.subtract(1, "month")
    });
  };

  onNext = () => {
    this.setState({
      dateObject: this.state.dateObject.add(1, "month")
    });
  }

  onPrevYear = () => {
    this.setState({
      dateObject: this.state.dateObject.subtract(1, "year"),
      showMonthTable: true,
      showDateTable: false
    });

  };

  onNextYear = () => {
    this.setState({
      dateObject: this.state.dateObject.add(1, "year"),
      showMonthTable: true,
      showDateTable: false
    });
  }

  onDayClick = (e, d) => {
    this.setState(
      {
        selectedDay: d
      },
      () => {
        this.props.getEvents(this.state.dateObject.format("Y"), this.state.dateObject.format("MM"), this.state.selectedDay,this.props.user.jwt)  
        this.props.chosenDate(this.state.dateObject.format("Y"), this.state.dateObject.format("MMMM"), this.state.selectedDay)
      }
    );
  };

  componentDidMount() {
    this.props.getEvents(this.state.dateObject.format("Y"), this.state.dateObject.format("MM"), Number(this.state.dateObject.format("D")), this.props.user.jwt)
    this.props.chosenDate(this.state.dateObject.format("Y"), this.state.dateObject.format("MMMM"), Number(this.state.dateObject.format("D")))
  }

  render() {

    return (
      <div>
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

        />
        <EventDetailsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, { getEvents, chosenDate })(CalendarContainer)
