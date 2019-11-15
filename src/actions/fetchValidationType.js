import { baseUrl } from '../constants'

// export const setSomething = (payload) => {
//     return {
//         type: 'SET_SOMETHING',
//         payload
//     }
// }

export const fetchValidationType = (validationCode) => {
    return function (dispatch, getState) {

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