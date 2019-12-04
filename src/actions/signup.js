import { baseUrl } from '../constants';
import { getServerMessage } from './messages';

export const signup = email => dispatch => {
  fetch(`${baseUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email
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
