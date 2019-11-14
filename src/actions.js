import request from 'superagent'
import { baseUrl } from './constants'

console.log('Old actions')

export const CLEAR_MESSAGE = "CLEAR_MESSAGE"
export const SET_MESSAGE = "SET_MESSAGE"
export const SET_USER = "SET_USER"
export const SET_USERS = "SET_USERS"
export const SET_VALIDATIONTYPE = "SET_VALIDATIONTYPE"
export const GET_EVENTS = 'GET_EVENTS'

export const clearMessage = () => dispatch => {
    dispatch({
        type: CLEAR_MESSAGE,
    })
}

export const handleResult = data => dispatch => {
    // console.log("data inside handle result", data)

    if (data && data.body && data.body.message) {
        dispatch({
            type: SET_MESSAGE,
            payload: data.body.message
        })
    }

    if (data && data.body && data.body.users) {
        dispatch({
            type: SET_USERS,
            payload: data.body.users
        })
    }

    if (data && data.body && data.body.validationType) {
        dispatch({
            type: SET_VALIDATIONTYPE,
            payload: data.body.validationType
        })
    }
}

export const CHOSEN_DATE = 'CHOSEN_DATE'

export const GET_USER = 'GET_USER'

function getUser(payload) {
    return {
        type: GET_USER,
        payload
    }
}

export const newUser = (user) => (dispatch) => {
    request
        .post(`${baseUrl}/users`)
        .send(user)
        .then(res => {
            dispatch(getUser(res.body))
        })
        .catch(console.error)
}