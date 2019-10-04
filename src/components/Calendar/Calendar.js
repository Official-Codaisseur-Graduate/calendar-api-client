import React, { Component } from 'react'
import moment from "moment";
import "./calendar.css";

export default class Calendar extends Component {

  firstDayOfMonth = () => {
    let firstDay = moment(this.props.dateObject)
      .startOf("month")
      .format("d")
    return firstDay
  }

  dayList = () => {
    let emptyCells = [];
    for (let emptyCell = 0; emptyCell < this.firstDayOfMonth(); emptyCell++) {
      emptyCells.push(<td key={-emptyCell} className="calendar-day empty">{""}</td>);
    }
    let daysInMonth = [];
    for (let day = 1; day <= this.props.dateObject.daysInMonth(); day++) {

      let currentMonth = moment().format("MMMM")
      let currentDay = day === Number(this.props.dateObject.format("D")) && currentMonth === this.props.dateObject.format("MMMM") ? "today" : ''

      daysInMonth.push(
        <td key={day} className={`calendar-day ${currentDay}`} onClick={e => {
          this.props.onDayClick(e, day);
        }}>
          <span>
            {day}
          </span>
        </td>
      );
    }
    let totalSlots = [...emptyCells, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, cell) => {
      if (cell % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (cell === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    return rows
  }

  monthList = () => {

    let months = moment.months().map(month => {
      return (
        <td
          key={month}
          className="calendar-month"
          onClick={e => {
            this.props.setMonth(month);
          }}
        >
          <span>{month}</span>
      </td> )
    })
    let rows = []
    let cells = []

    months.forEach((row, month) => {
      if (month % 3 !== 0 || month === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);

    return rows

  };

  render() {
    return (
      <div>
        <div className="tail-datetime-calendar">
      <div className="calendar-navi">
          <span
            onClick={this.props.onPrev}
            className="calendar-button button-prev"
          />
          {!this.props.showMonthTable && (
            <span
              onClick={this.props.showMonth}
              className="calendar-label"
            >
              {this.props.dateObject.format("MMMM")}
            </span>
          )}
          <span
          onClick={this.props.onNext}
          className="calendar-button button-next"
        />
          <span
            onClick={this.props.onPrevYear}
            className="calendar-button button-prevYear"
          />
          <span className="calendar-label" > 
            {this.props.dateObject.format("Y")}
            </span>
            <span
          onClick={this.props.onNextYear}
          className="calendar-button button-nextYear"
          />
        </div>
       
        <div className="calendar-date">
          {this.props.showDateTable && (
            
              <table className="calendar-day">
                <thead>
                  <tr>{moment.weekdaysShort().map(day => {
                    return <th key={day}>{day}</th>;
                      })}</tr>
                </thead>
                <tbody>{this.dayList().map(week => {
                  if (week.length === 0) {
                    return week
                  } else {
                    const key = week[0].key
                    return <tr key={key}>{week}</tr>
                  }
                  })}
                </tbody>
              </table>
          )}
          </div>
          <div className="calendar-date">
          {this.props.showMonthTable && (
            <table className="calendar-month">
              <thead>
                <tr>
                  <th colSpan="4">Select a Month</th>
                </tr>
              </thead>
              <tbody>{this.monthList().map(row => {
                if (row.length === 0) {
                  return row
                } else {
                  const key = row[0].key
                  return <tr key={key}>{row}</tr>
                }
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
      </div>
    )
  }
}
