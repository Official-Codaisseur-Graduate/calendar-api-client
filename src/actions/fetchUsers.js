import lscache from 'lscache';

import { baseUrl } from '../constants';

export const setUsers = payload => {
  return {
    type: 'SET_USERS',
    payload
  };
};

export const fetchUsers = () => {
  return function(dispatch) {
    const user = lscache.get('user');

    fetch(`${baseUrl}/users`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.jwt}`
      }
    })
      .then(response => response.json())
      .then(data => {
        dispatch(setUsers(data.users));
      })
      .catch(error => console.log(error));
  };
};
