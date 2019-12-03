import request from 'superagent';
import { baseUrl } from '../constants';

export const forgotPassword = email => {
  request
    .post(`${baseUrl}/forgot-password`)
    .send({
      email
    })
    .then(response => {
      console.log('FORGOT PASSWORD', response);
    })
    .catch(console.error);
};

export const resetPassword = (validation_code, email, new_password) => {
  request
    .post(`${baseUrl}/reset-password`)
    .set('validation', validation_code)
    .send({
      email,
      new_password
    })
    .then(response => {
      console.log('RESET PASSWORD', response);
    })
    .catch(console.error);
};
