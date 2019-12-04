import { baseUrl } from '../constants';
import lscache from 'lscache';
import { getServerMessage } from './messages';

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
        const events = data.events;
        if (!events) {
          const action = getServerMessage(data.message);
          dispatch(action);
        }
        dispatch(setEvents(events));
      })
      .catch(error => console.log(error));
  };
};
