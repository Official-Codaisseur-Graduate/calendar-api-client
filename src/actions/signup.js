import { baseUrl } from '../constants';

export const signup = email => {
  return function() {
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
          throw Error(
            `Respsonse status ${response.status} (${response.statusText}): ${json.message}`
          );
        }
        console.log(json);
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
