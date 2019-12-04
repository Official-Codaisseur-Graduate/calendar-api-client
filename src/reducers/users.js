export default function(state = [], action = {}) {
  switch (action.type) {
    case 'SET_USERS':
      if (action.payload) {
        return action.payload;
      }
      return state;
    default:
      return state;
  }
}
