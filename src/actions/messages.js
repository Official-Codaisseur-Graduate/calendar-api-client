export function getServerMessage(payload) {
  return {
    type: 'MESSAGE',
    payload
  };
}

export const clearMessage = () => dispatch => {
  const action = {
    type: 'CLEAR_MESSAGE',
    payload: ''
  };
  dispatch(action);
};
