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
    allmonths: moment.months(),
    selectedDay: null
  }

  showMonth = (e, month) => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
     showDateTable: !this.state.showDateTable
    })
  }

  setMonth = month => {
    let monthNo = this.state.allmonths.indexOf(month)
    let dateObject = Object.assign({}, this.state.dateObject)
    dateObject = moment(dateObject).set("month", monthNo)
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    })
  }

  MonthList = props => {
    let months = [];
    props.data.map(data => {
      return months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
            this.setMonth(data);
          }}
        >
          <span>{data}</span>
        </td>
      );
    });
    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);
    let monthlist = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan="4">Select a Month</th>
          </tr>
        </thead>
        <tbody>{monthlist}</tbody>
      </table>
    );
  };

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
        this.props.getEvents()
      }
    );
  };
  render() {
    

    return (
      <div>
        <Calendar 
        onPrev={this.onPrev}
        weekdaysShort={this.weekdayshort}
        showMonthTable={this.state.showMonthTable}
        showMonth={this.showMonth}
        onNext={this.onNext}
        MonthList={this.MonthList}
        showDateTable={this.state.showDateTable}
        dateObject={this.state.dateObject}
        onDayClick={this.onDayClick}

        />
      
      </div>
    );
  }
}

export default connect(null, { getEvents })(CalendarContainer)
