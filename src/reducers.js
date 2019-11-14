// import {
//     SET_MESSAGE,
//     CLEAR_MESSAGE,
//     messageTimeout,
//     SET_USERS,
//     SET_VALIDATIONTYPE
// } from './actions'

const reducer = (state = {}, action = {}) => {
    // console.log('reducer state >', state, 'reducer action', action);
    
    switch (action.type) {
        case 'GET_EVENTS':
            return { ...state, events: action.payload }
        case 'SET_DATE':
            return { ...state, rightDate: action.payload }
        // case SET_VALIDATIONTYPE: // For new users?
        //     return { ...state, validationType: action.payload }
        // case CHOSEN_DATE:
        //     return { ...state, rightDate: action.payload }
        // case SET_USERS: // Admin backend - load all users
        //     return { ...state, users: action.payload }
        // case SET_MESSAGE: // Admin backend - show status update
        //     return {
        //         ...state,
        //         message: action.payload,
        //         expires: new Date().getTime() + messageTimeout
        //     }
        // case CLEAR_MESSAGE: // Admin backend - clear status update
        //     return {
        //         ...state,
        //         message: null,
        //         expires: null
        //     }
        default:
            return state
    }
}

export default reducer