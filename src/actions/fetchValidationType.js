import { baseUrl } from '../constants';

export const setValidationType = payload => {
  return {
    type: 'SET_VALIDATION_TYPE',
    payload
  };
};

export const fetchValidationType = validationCode => {
  return function(dispatch) {
    fetch(`${baseUrl}/validation`, {
      method: 'GET',
      headers: {
        validation: validationCode
      }
    })
      .then(response => response.json())
      .then(data => {
        dispatch(setValidationType(data.validationType));
      })
      .catch(error => console.log(error));
  };
};
