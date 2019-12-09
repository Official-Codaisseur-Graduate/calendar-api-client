import lscache from 'lscache';

import { baseUrl } from '../constants';
import { getServerMessage } from './messages';

export const login = (email, password) => dispatch => {
  lscache.enableWarnings(true);
  lscache.flushExpired();

  fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(response => Promise.all([response, response.json()]))
    .then(([response, json]) => {
      if (!response.ok) {
        const action = getServerMessage(json.message);
        dispatch(action);
      } else {
        const action = getServerMessage('');
        dispatch(action);
        if (process.env.PORT) {
          // Production
          console.log('Production, login session 15 minutes');
          lscache.set('user', json.user, 15); // 15 minutes
        } else {
          // Development
          console.log('Development, login session 24 hours');
          lscache.set('user', json.user, 1440); // 24 hours
        }
        window.location.reload();
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
