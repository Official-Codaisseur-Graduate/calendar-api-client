import { baseUrl } from '../constants';
import lscache from 'lscache';

export const setEvents = payload => {
  return {
    type: 'SET_EVENTS',
    payload
  };
};

export const fetchEvents = (year, month, day) => {
  return function(dispatch) {
    const user = lscache.get('user');

    fetch(`${baseUrl}/events/${year}/${month}/${day}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.jwt}`
      }
    })
      .then(response => response.json())
      .then(data => {
        dispatch(setEvents(data.events));
      })
      .catch(error => console.log(error));
  };
};
