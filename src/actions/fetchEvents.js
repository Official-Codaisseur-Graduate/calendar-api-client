import { baseUrl } from '../constants';
import lscache from 'lscache';

export const setEvents = payload => {
  return {
    type: 'SET_EVENTS',
    payload
  };
};

export const fetchEvents = (year, month, day) => {
  return function(dispatch, getState) {
    // console.log('What do I get?', year, month, day);

    // check if user is logged in.
    const user = lscache.get('user');
    if (!user) {
      return console.log('User is not logged in.');
    }

    fetch(`${baseUrl}/events/${year}/${month}/${day}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.jwt}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log('fetchEvenst data.events', data.events);
        dispatch(setEvents(data.events));
      })
      .catch(error => console.log(error));
  };
};
