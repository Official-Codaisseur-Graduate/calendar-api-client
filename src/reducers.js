const reducer = (state = {}, action = {}) => {
    // console.log('reducer state >', state, 'reducer action', action);
    
    switch (action.type) {
        case 'SET_VALIDATION_TYPE':
            return { ...state, validationType: action.payload }
        case 'SET_USERS': // Admin backend - load all users
            return { ...state, users: action.payload }
        case 'SET_EVENTS':
            return { ...state, events: action.payload }
        case 'SET_DATE':
            return { ...state, rightDate: action.payload }
        default:
            return state
    }
}

export default reducer