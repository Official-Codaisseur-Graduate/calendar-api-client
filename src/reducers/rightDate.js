export default function(state = [], action = {}) {
  switch (action.type) {
    case 'SET_DATE':
      return action.payload;
    default:
      return state;
  }
}
