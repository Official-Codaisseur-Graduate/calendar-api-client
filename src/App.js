import React from 'react';
import { Route } from 'react-router-dom'

import CalendarContainer from './components/Calendar/CalendarContainer'
import LoginFormContainer from './components/Login/LoginFormContainer'
import SignupFormContainer from './components/Signup/SignupFormContainer'
import Notification from "./components/Notification"
import ValidationContainer from './components/Validation/ValidationContainer';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route path="/calendar" component={CalendarContainer} />
      <Route path="/validate/:code" component={ValidationContainer} />
      <Notification />
    </div>
  );
}

export default App;
