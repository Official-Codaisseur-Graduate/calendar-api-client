export default function(state = [], action = {}) {
    switch (action.type) {
        case 'SET_CURRENT_MONTH':
            return action.payload;
        default:
            return state;
    }
}
