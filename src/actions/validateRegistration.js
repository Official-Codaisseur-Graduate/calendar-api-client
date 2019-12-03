import { baseUrl } from '../constants';

export const validateRegistration = (code, name, password) => {
  return function() {
    fetch(`${baseUrl}/registervalidation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        validation: code
      },
      body: JSON.stringify({
        name,
        password
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
