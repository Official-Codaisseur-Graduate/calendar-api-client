import lscache from 'lscache';

import { baseUrl } from '../constants';
import { getServerMessage } from './messages';

export const GoogleCalendarApiConfig = (
  clientEmail,
  privateKey,
  userPassword
) => {
  return function(dispatch) {
    const user = lscache.get('user');

    fetch(`${baseUrl}/googleapi`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.jwt}`
      },
      body: JSON.stringify({
        client_email: clientEmail,
        private_key: privateKey,
        password: userPassword
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
