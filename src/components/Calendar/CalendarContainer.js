import React from "react";
import moment from "moment";
import "./calendar.css";
import Calendar from './Calendar'
import { connect } from 'react-redux'
import { getEvents } from '../../actions'

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

  onDayClick = (e, d) => {
    this.setState(
      {
        selectedDay: d
      },
      () => {
        console.log("SELECTED DAY: ", this.state.selectedDay, 'Month:', this.state.dateObject.format("MM"), 'year:', this.state.dateObject.format("Y"));
        
      }
    );
  };

  componentDidMount() {
    this.props.getEvents()
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

        />
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, { getEvents })(CalendarContainer)
