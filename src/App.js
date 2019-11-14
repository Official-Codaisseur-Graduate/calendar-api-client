import React from 'react';
import { Route } from 'react-router-dom'

import CalendarContainer from './components/Calendar/CalendarContainer'
import LoginFormContainer from './components/Login/LoginFormContainer'
import SignupFormContainer from './components/Signup/SignupFormContainer'
import AdminPageContainer from './components/AdminPage/AdminPageContainer'
import Notification from "./components/Notification"
import ValidationContainer from './components/Validation/ValidationContainer';
import ResetPasswordFormContainer from './components/ResetPassword/ResetPasswordFormContainer'
import ForgotPasswordContainer from './components/ForgotPassword/ForgotPasswordContainer'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route path="/calendar" component={CalendarContainer} />
      <Route path="/validate/:code" component={ValidationContainer} />
      <Route path="/adminpage" component={AdminPageContainer} />
      <Route path="/resetpassword/:code/:email" component={ResetPasswordFormContainer} />
      <Route path="/forgotpassword" component={ForgotPasswordContainer} />
      <Notification />
    </div>
  );
}

export default App;
