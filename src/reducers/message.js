export default function(state = '', action = {}) {
  switch (action.type) {
    case 'MESSAGE':
      return action.payload;
    case 'CLEAR_MESSAGE':
      return '';
    default:
      return state;
  }
}
