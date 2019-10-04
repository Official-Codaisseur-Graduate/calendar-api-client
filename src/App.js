import React from 'react';
import CalendarContainer from './components/Calendar/CalendarContainer'
import EventDetailsContainer from './components/EventDetails/EventDetailsContainer'
import { Route } from 'react-router-dom'
import LoginFormContainer from './components/Login/LoginForm'
import SignupFormContainer from './components/Signup/SignupFormContainer'

function App() {
  return (
    <div className="App">
      <Route path="/" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <CalendarContainer />
      <EventDetailsContainer />
    </div>
  );
}

export default App;
