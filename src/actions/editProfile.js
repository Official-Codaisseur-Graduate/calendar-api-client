import { baseUrl } from '../constants';
import lscache from 'lscache';
import { getServerMessage } from './messages';

export const editProfile = (name, profilePic) => {
  return function(dispatch) {
    const user = lscache.get('user');
    if (!name && !profilePic) {
      const action = getServerMessage('Not changes made...');
      return dispatch(action);
    }
    fetch(`${baseUrl}/editProfile`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.jwt}`
      },
      body: JSON.stringify({
        name,
        profilePic
      })
    })
      .then(response => response.json())
      .then(data => {
        const newUserData = {
          ...user,
          profilePic: data.updatedUser.profilePic,
          name: data.updatedUser.name
        };
        const action = getServerMessage(data.message);
        dispatch(action);

        console.log('data', data);
        lscache.set('user', newUserData);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch(error => console.log(error));
  };
};
