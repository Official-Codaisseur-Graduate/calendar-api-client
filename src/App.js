import React from 'react';
import { Route } from 'react-router-dom'

// Components imports
import LoginFormContainer from './components/Login/LoginFormContainer'
import SignupFormContainer from './components/Signup/SignupFormContainer'
import AdminPageContainer from './components/AdminPage/AdminPageContainer'
import Notification from "./components/Notification"
import ValidationContainer from './components/Validation/ValidationContainer';
import ResetPasswordFormContainer from './components/ResetPassword/ResetPasswordFormContainer'
import ForgotPasswordContainer from './components/ForgotPassword/ForgotPasswordContainer'

function App() {
  return <div className="App">
    {/* Signup routes */}
    <Route component={SignupFormContainer} exact path="/signup"/>
    <Route component={ValidationContainer} exact path="/validate/:code"/>
    <Route component={ResetPasswordFormContainer} path="/resetpassword/:code/:email" />
    <Route component={ForgotPasswordContainer} path="/forgotpassword" />
      
    {/* App routes */}
    <Route component={LoginFormContainer} exact path="/"/>
    
    {/* Admin routes */}
    <Route component={AdminPageContainer} exact path="/admin"/>
      
    {/* <Notification /> */}
  </div>
}

export default App;