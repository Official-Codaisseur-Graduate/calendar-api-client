import React from 'react';  
import EventButtonContainer from './components/EventButton/EventButtonContainer'
import CalendarContainer from './components/Calendar/CalendarContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <CalendarContainer />
      <EventButtonContainer />
    </div>
  );
}

export default App;
