import lscache from 'lscache';

import { baseUrl } from '../constants';
import { getServerMessage } from './messages';

export const setupGoogleCalendar = (calendarId, password) => {
  return function(dispatch) {
    const user = lscache.get('user');

    if (!user) {
      return console.log('User is not logged in.');
    }

    fetch(`${baseUrl}/calendar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.jwt}`
      },
      body: JSON.stringify({
        calendar_id: calendarId,
        password
      })
    })
      .then(response => Promise.all([response, response.json()]))
      .then(([response, json]) => {
        if (!response.ok) {
          const action = getServerMessage(json.message);
          dispatch(action);
        } else {
          const action = getServerMessage(json.message);
          dispatch(action);
        }
      })
      .catch(exception => {
        console.log(
          new Map([
            [TypeError, 'There was a problem fetching the response.'],
            [SyntaxError, 'There was a problem parsing the response.'],
            [Error, exception.message]
          ]).get(exception.constructor)
        );
      });
  };
};
