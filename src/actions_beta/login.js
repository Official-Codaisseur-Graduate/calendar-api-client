import { baseUrl } from '../constants'
import lscache from 'lscache'

export const setToken = (payload) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload
    }
}

export const login = (email, password) => {
    return function (dispatch, getState) {
        // console.log('What is email and password? in actions', email, password);
        if (!lscache.supported()) {
            alert('Local storage is unsupported in this browser');
            return;
        }
        // enable warnings
        lscache.enableWarnings(true);
        lscache.flushExpired();

        const JWT = lscache.get('JWT')

        if (!JWT) {
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
                        throw Error(`Respsonse status ${response.status} (${response.statusText}): ${json.message}`);
                    }
                    // console.log('json', json);
                    if (process.env.PORT) { // Production
                        console.log('Production');
                        lscache.set('JWT', json.jwt, 15); // 15 minutes
                    }
                    else { // Development
                        console.log('Development');
                        lscache.set('JWT', json.jwt, 1440); // 24 hours
                    }
                    dispatch(setToken(json.jwt))
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
}




request
.post(`${baseUrl}/login`)
.send({
  email: this.state.email,
  password: this.state.password
})
.then(this.props.handleResult)
.catch(error => this.props.handleResult(error.response))
this.setState({
email: '',
password: '',
})