import React from 'react';
import { Route } from 'react-router-dom'

import CalendarContainer from './components/Calendar/CalendarContainer'
import EventDetailsContainer from './components/EventDetails/EventDetailsContainer'
import LoginFormContainer from './components/Login/LoginForm'
import SignupFormContainer from './components/Signup/SignupFormContainer'
import Notification from "./components/Notification"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <CalendarContainer />
      <EventDetailsContainer />
      <Notification />
    </div>
  );
}

export default App;
