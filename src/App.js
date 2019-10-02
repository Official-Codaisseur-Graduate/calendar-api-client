import React from 'react';  
import CalendarContainer from './components/Calendar/CalendarContainer'
import EventDetailsContainer from './components/EventDetails/EventDetailsContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <CalendarContainer />
      <EventDetailsContainer />
    </div>
  );
}

export default App;
