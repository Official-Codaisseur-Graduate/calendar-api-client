import { baseUrl } from '../constants';
import lscache from 'lscache';
import { getServerMessage } from './messages';

export const beAssistant = (teacherEmail, event) => dispatch => {
  console.log('Action happened');

  const user = lscache.get('user');
  fetch(`${baseUrl}/assistant-request`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.jwt}`
    },
    body: JSON.stringify({
      teacherEmail,
      event
    })
  })
    .then(response => {
      console.log('MESSAGE SENT');
      if (response.ok) {
        console.log(response);
        const action = getServerMessage(response.body.message);
        dispatch(action);
      } else if (!response.ok) {
        const action = getServerMessage(response.body.message);
        dispatch(action);
      }
    })
    .catch(console.error);
};
