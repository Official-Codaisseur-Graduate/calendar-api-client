import { baseUrl } from '../constants';
import lscache from 'lscache';
import { getServerMessage } from './messages';

export const configMailService = (send_email, send_password, password) => {
  return function(dispatch) {
    const user = lscache.get('user');

    fetch(`${baseUrl}/configemail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.jwt}`
      },
      body: JSON.stringify({
        send_email,
        send_password,
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
