import React from 'react';
import { Route } from 'react-router-dom'

// Components imports
import LoginFormContainer from './components/Login/LoginFormContainer'
import SignupFormContainer from './components/Signup/SignupFormContainer'
import AdminPageContainer from './components/AdminPage/AdminPageContainer'
import Notification from "./components/Notification"
import ValidationContainer from './components/Validation/ValidationContainer';

function App() {
  return <div className="App">
    <Route component={LoginFormContainer} exact path="/"/>
    <Route component={SignupFormContainer} exact path="/signup"/>
    <Route component={ValidationContainer} exact path="/validate/:code"/>
    <Notification />
    
    {/* Admin routes */}
    <Route component={AdminPageContainer} exact path="/admin"/>
  </div>
}

export default App;