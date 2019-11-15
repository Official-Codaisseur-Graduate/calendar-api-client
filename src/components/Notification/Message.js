import React from 'react'

export default props =>
  <div className="notificationbox">
    <h2 className="notification">
      {props.message.message}
    </h2>
  </div>