import React from 'react'


export default class CalendarIdForm extends React.Component {

  render() {
    
    return (
      
      <div className="form-container">
        <form className="form" onSubmit={this.props.onSubmit}>
          <h2>Setup calendar id</h2>
          <p>Copy paste the following calendar id:</p>
          {!this.props.calendar ? 'loading...' :
          <ul> {this.props.calendar.map(calendar => {
            return <li key={calendar.id}>{calendar.id}</li>
          })}</ul>}

          <label>
            Calendar id:
          <input
            type='text'
            value={this.props.calendar_id}
            name='calendar_id'
            placeholder='calendar id'
            onChange={this.props.onChange}
            />
          </label>
          <label>
            Password:
            <input
            type='password'
            value={this.props.password}
            name='password'
            placeholder='enter password'
            onChange={this.props.onChange}
            />
          </label>
          <button type='submit'>Submit calendar id</button>
        </form>
      </div>
    )
  }
}