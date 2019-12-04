import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Components imports
import LoginFormContainer from './components/Login/LoginFormContainer';
import SignupFormContainer from './components/Signup/SignupFormContainer';
import AdminPageContainer from './components/AdminPage/AdminPageContainer';
import ValidationContainer from './components/Validation/ValidationContainer';
import ResetPasswordFormContainer from './components/ResetPassword/ResetPasswordFormContainer';
import ForgotPasswordContainer from './components/ForgotPassword/ForgotPasswordContainer';
import NavigationContainer from './components/Navigation/NavigationContainer';
import HomePageContainer from './components/HomePage/HomePageContainer';
import MyProfile from './components/MyProfile/MyProfile';

// import Notification from './components/Notification'

function App() {
  return (
    <div className='App'>
      <Route path='/' component={NavigationContainer} />
      <Route exact path='/' component={HomePageContainer} />
      <Route component={MyProfile} exact path='/myProfile' />
      <Container className='main-container'>
        {/* Signup routes */}
        <Route exact path='/login' component={LoginFormContainer} />
        <Route exact path='/signup' component={SignupFormContainer} />
        <Route exact path='/validate/:code' component={ValidationContainer} />
        {/* Reset or forgot password routes */}
        <Route
          component={ResetPasswordFormContainer}
          path='/resetpassword/:code/:email'
        />
        <Route
          component={ForgotPasswordContainer}
          exact
          path='/forgotpassword'
        />

        {/* Admin routes */}
        <Route component={AdminPageContainer} exact path='/admin' />

        {/* <Notification /> */}
      </Container>
    </div>
  );
}

export default App;
