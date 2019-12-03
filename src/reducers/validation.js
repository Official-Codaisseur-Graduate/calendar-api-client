export default function(state = [], action = {}) {
  switch (action.type) {
    case 'SET_VALIDATION_TYPE':
      return action.payload;
    default:
      return state;
  }
}
