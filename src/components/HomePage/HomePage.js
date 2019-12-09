import React from 'react';
import { Link } from 'react-router-dom';

import CodaisseurLogo from '../../assets/codaisseur-logo.png';

export default function HomePage(props) {
  return (
    <div className='main-home'>
      <img alt='Codaisseur Academy Calendar' src={CodaisseurLogo} className='main-logo' />
      <h1>The Academy Calendar</h1>
      {/* Change description */}
      <p style={{ fontWeight: 'bolder', marginTop: '30px' }}>
        The Codaisseur Academy Calendar is a platform for Codaisseur's students, teacher's
        assistants and teachers.
      </p>
      <p>
        Here you can view all of Codaisseur's Academy events, which teacher is teaching what class
        and what lesson on a given day. You can also see special events here, like Taste of Code
        events or Demo nights.
      </p>
      <p>
        Also, if you are given the role of an assistant you can volunteer on any event to assist a
        teacher in their lessons.
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
