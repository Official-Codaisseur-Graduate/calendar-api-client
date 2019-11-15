import { baseUrl } from '../constants'
import lscache from 'lscache'

// export const setSomething = (payload) => {
//     return {
//         type: 'SET_SOMETHING',
//         payload
//     }
// }

export const fetchValidationType = (validationCode) => {
    return function (dispatch, getState) {
        // check if user is logged in.
        const user = lscache.get('user');
        if(!user) {
            return console.log('User is not logged in.');
        }

        fetch(`${baseUrl}/validation`, {
                method: 'GET',
                headers: {
                    'validation': validationCode
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('data', data);
                // dispatch(setSomething(data.users))
            }).catch(
                error => console.log(error)
            )
    }
}