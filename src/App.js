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
import ProfileContainer from './components/Profile/ProfileContainer';
import CalendarContainer from './components/Calendar/CalendarContainer';
import lscache from 'lscache';
import UsersListContainer from './components/UsersList/UsersListContainer';
import NewCalendarContainer from './components/NewBIGCalendar/NewCalendarContainer';
// import Notification from './components/Notification'

function App() {
  const user = lscache.get('user');
  return (
    <div className='App'>
      <Route path='/' component={NavigationContainer} />

      <Container className='main-container'>
        {!user && <Route exact path='/' component={HomePageContainer} />}
        {user && <Route exact path='/' component={NewCalendarContainer} />}
        <Route exact path='/login' component={LoginFormContainer} />
        <Route exact path='/signup' component={SignupFormContainer} />
        <Route exact path='/validate/:code' component={ValidationContainer} />
        <Route exact path='/profile' component={ProfileContainer} />
        <Route
          component={ResetPasswordFormContainer}
          path='/resetpassword/:code/:email'
        />
        <Route
          component={ForgotPasswordContainer}
          exact
          path='/forgotpassword'
        />
        <Route component={AdminPageContainer} exact path='/admin' />
        <Route exact path='/users' component={UsersListContainer} />
      </Container>
    </div>
  );
}

export default App;
