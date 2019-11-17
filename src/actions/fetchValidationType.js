import { baseUrl } from '../constants'

export const setValidationType = (payload) => {
    return {
        type: 'SET_VALIDATION_TYPE',
        payload
    }
}

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
                console.log('data', data.validationType);
                dispatch(setValidationType(data.validationType))
            }).catch(
                error => console.log(error)
            )

    }
}