import { baseUrl } from '../constants';
import lscache from 'lscache';

export const configMailService = (send_email, send_password, password) => {
  return function(dispatch, getState) {
    // check if user is logged in.
    const user = lscache.get('user');
    if (!user) {
      return console.log('User is not logged in.');
    }

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
        // console.log('response', response);
        if (!response.ok) {
          throw Error(
            `Respsonse status ${response.status} (${response.statusText}): ${json.message}`
          );
        }
        console.log(json);
        // dispatch(setMailService(json))
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
