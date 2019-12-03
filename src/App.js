import React from 'react';
import { Route } from 'react-router-dom';

// Components imports
import LoginFormContainer from './components/Login/LoginFormContainer';
import SignupFormContainer from './components/Signup/SignupFormContainer';
import AdminPageContainer from './components/AdminPage/AdminPageContainer';
import ValidationContainer from './components/Validation/ValidationContainer';
import ResetPasswordFormContainer from './components/ResetPassword/ResetPasswordFormContainer';
import ForgotPasswordContainer from './components/ForgotPassword/ForgotPasswordContainer';
import NavigationContainer from './components/Navigation/NavigationContainer';
import { Container } from 'react-bootstrap';

// import Notification from './components/Notification'

function App() {
    return (
        <div className="App">
            <Route path="/" component={NavigationContainer} />

            <Container className="main-container">
                {/* Signup routes */}
                <Route component={SignupFormContainer} exact path="/signup" />
                <Route
                    component={ValidationContainer}
                    exact
                    path="/validate/:code"
                />
                {/* Reset or forgot password routes */}
                <Route
                    component={ResetPasswordFormContainer}
                    path="/resetpassword/:code/:email"
                />
                <Route
                    component={ForgotPasswordContainer}
                    exact
                    path="/forgotpassword"
                />
                {/* App routes */}
                <Route component={LoginFormContainer} exact path="/" />

                {/* Admin routes */}
                <Route component={AdminPageContainer} exact path="/admin" />

                {/* <Notification /> */}
            </Container>
        </div>
    );
}

export default App;
