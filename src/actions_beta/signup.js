import { baseUrl } from '../constants'

// export const setUser = (payload) => {
//     return {
//         type: 'SET_USER',
//         payload
//     }
// }

export const signup = (email) => {
    return function (dispatch, getState) {

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
                // console.log('response', response);
                if (!response.ok) {
                    throw Error(`Respsonse status ${response.status} (${response.statusText}): ${json.message}`);
                }
                console.log(json);
                // dispatch(setUser(json))
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


// onSubmit = event => {
//     event.preventDefault()
//     request.post(`${baseUrl}/register`)
//         .send({
//             email: this.state.email,
//             // password: this.state.password,
//         })
//         .then(response => {
//             this.props.handleResult(response)
//             this.props.history.push('/')
//         })
//         .catch(error => this.props.handleResult(error.response))
// }