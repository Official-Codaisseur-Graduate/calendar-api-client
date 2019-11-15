import React from 'react'

export default class CalendarIdForm extends React.Component {

  render() {
    
    return (
      <form className="form" onSubmit={this.props.onSubmit}>
          <h2>Setup Google Calendar - Calendar ID</h2>
          <p>You can find the calendar ID from the Google calendar under "Calendar settings" and down under section "Integrate calendar"</p>

          {!this.props.calendar ? null :
          <ul> {this.props.calendar.map(calendar => {
            return <li key={calendar.id}>{calendar.id}</li>
          })}</ul>}

          <p>
            <label>Calendar ID:</label><br/>
            <input
              type='text'
              value={this.props.calendar_id}
              name='calendar_id'
              placeholder='Enter calendar ID'
              onChange={this.props.onChange}
            /><br/><span>(Example: example@gmail.com or codaisseur.com_repcdhtcgm95695p0nj15j21dg@group.calendar.google.com)</span>
          </p>
          
          <p>
            <label>Password:</label><br/>
            <input
              type='password'
              value={this.props.password}
              name='password'
              placeholder='Enter password'
              onChange={this.props.onChange}
            /> <span>(Admin password for validation)</span>
          </p>
          
          <button type='submit'>Submit calendar id</button>
      </form>
    )
  }
}