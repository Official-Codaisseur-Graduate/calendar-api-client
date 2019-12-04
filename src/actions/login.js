import { baseUrl } from '../constants';
import lscache from 'lscache';

export function handleError(payload) {
    return {
        type: 'ERROR',
        payload,
    };
}

export const login = (email, password) => dispatch => {
    // enable warnings
    lscache.enableWarnings(true);
    lscache.flushExpired();

    fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
        .then(response => Promise.all([response, response.json()]))
        .then(([response, json]) => {
            console.log(response);
            console.log(json);
            if (!response.ok) {
                const action = handleError(json.message);
                dispatch(action);
            } else {
                const action = handleError('');
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
                window.location.reload(); // Sometimes needed
            }
        })
        .catch(exception => {
            console.log(
                new Map([
                    [TypeError, 'There was a problem fetching the response.'],
                    [SyntaxError, 'There was a problem parsing the response.'],
                    [Error, exception.message],
                ]).get(exception.constructor)
            );
        });
};
