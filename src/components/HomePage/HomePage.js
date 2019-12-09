import React from 'react';
import { Link } from 'react-router-dom';

import CodaisseurLogo from '../../assets/codaisseur-logo.png';

export default function HomePage(props) {
  return (
    <div className='main-home'>
      <img
        alt='Codaisseur Academy Calendar'
        src={CodaisseurLogo}
        className='main-logo'
      />
      <h1>The Academy Calendar</h1>
      {/* Change description */}
      <p>
        The app is made to show the events happening on certain dates of the
        calendar. In short, once a user clicks on a day, the events for that
        particular date would be displayed. The user and admin stories are
        described below.
      </p>
      <Link to='/login' className='btn btn-danger'>
        Login
      </Link>{' '}
      <Link to='/signup' className='btn btn-danger'>
        Signup
      </Link>
    </div>
  );
}
