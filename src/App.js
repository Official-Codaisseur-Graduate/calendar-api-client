import React from 'react';  
import CalendarContainer from './components/Calendar/CalendarContainer'
import { Route } from 'react-router-dom'
import LoginFormContainer from './components/Login/LoginForm'
import SignupFormContainer from './components/Signup/SignupFormContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path ="/" component={ LoginFormContainer } />
      <Route path ="/signup" component={ SignupFormContainer } />  
      <CalendarContainer />
    </div>
  );
}

export default App;
