import React, { Component } from 'react'
import moment from "moment";
import "./calendar.css";

export default class Calendar extends Component {

  weekdayshort = moment.weekdaysShort()

  daysInMonth = () => {
    return this.props.dateObject.daysInMonth()
  }

  year = () => {
    return this.props.dateObject.format("Y")
  }

  currentDay = () => {
    return this.props.dateObject.format("D")
  }

  firstDayOfMonth = () => {
    let dateObject = this.props.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d")
    return firstDay
  }

  month = () => {
    return this.props.dateObject.format("MMMM")
  }
  render() {
    let weekdayshortname = this.weekdayshort.map(day => {
      return <th key={day}>{day}</th>;
    });
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td key={-i} className="calendar-day empty">{""}</td>);
    }
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = d === this.currentDay() ? "today" : "";
      daysInMonth.push(
        <td key={d} className={`calendar-day ${currentDay}`}>
          <span
            onClick={e => {
              this.props.onDayClick(e, d);
            }}
          >
            {d}
          </span>
        </td>
      );
    }
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let daysinmonth = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });
    return (
      <div>
        <h2>Calendar</h2>
        <div className="tail-datetime-calendar">
      <div className="calendar-navi">
          <span
            onClick={e => {
              this.props.onPrev();
            }}
            className="calendar-button button-prev"
          />
          {!this.props.showMonthTable && (
            <span
              onClick={e => {
                this.props.showMonth();
              }}
              className="calendar-label"
            >
              {this.month()}
            </span>
          )}
          <span className="calendar-label" > 
            {this.year()}
          </span>
           <span
          onClick={e => {
            this.props.onNext();
          }}
          className="calendar-button button-next"
        />
        </div>
       
        <div className="calendar-date">
          
          {this.props.showMonthTable && (
            <this.props.MonthList data={moment.months()} />
          )}
        </div>

        {this.props.showDateTable && (
          <div className="calendar-date">
            <table className="calendar-day">
              <thead>
                <tr>{weekdayshortname}</tr>
              </thead>
              <tbody>{daysinmonth}</tbody>
            </table>
          </div>
        )}
      </div>
      </div>
    )
  }
}
