import { baseUrl } from '../constants';
import lscache from 'lscache';

export const setUsers = payload => {
  return {
    type: 'SET_USERS',
    payload
  };
};

export const fetchUsers = () => {
  return function(dispatch, getState) {
    // check if user is logged in.
    const user = lscache.get('user');
    if (!user) {
      return console.log('User is not logged in.');
    }

    fetch(`${baseUrl}/users`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.jwt}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log('data.users', data.users);
        dispatch(setUsers(data.users));
      })
      .catch(error => console.log(error));
  };
};
