import { baseUrl } from '../constants'
import lscache from 'lscache'

// export const setValidation = (payload) => {
//     return {
//         type: 'SET_VALIDATION',
//         payload
//     }
// }

export const validateRegistration = (code, name, password) => {
    return function (dispatch, getState) {
        // check if user is logged in.
        const user = lscache.get('user');
        if (!user) {
            return console.log('User is not logged in.');
        }

        fetch(`${baseUrl}/registervalidation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'validation': code
                },
                body: JSON.stringify({
                    name,
                    password
                })
            })
            .then(response => Promise.all([response, response.json()]))
            .then(([response, json]) => {
                // console.log('response', response);
                if (!response.ok) {
                    throw Error(`Respsonse status ${response.status} (${response.statusText}): ${json.message}`);
                }
                console.log(json);
                // dispatch(setValidation(json))
            })
            .catch(exception => {
                console.log(new Map([
                    [TypeError, "There was a problem fetching the response."],
                    [SyntaxError, "There was a problem parsing the response."],
                    [Error, exception.message]
                ]).get(exception.constructor));
            });

    }
}