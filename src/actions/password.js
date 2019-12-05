import request from 'superagent';
import { baseUrl } from '../constants';
import { getServerMessage } from './messages';

export const forgotPassword = email => dispatch => {
    request
        .post(`${baseUrl}/forgot-password`)
        .send({
            email,
        })
        .then(response => {
            if (response.ok) {
                const action = getServerMessage(response.body.message);
                dispatch(action);
            } else if (!response.ok) {
                const action = getServerMessage(response.body.message);
                dispatch(action);
            }
        })
        .catch(console.error);
};

export const resetPassword = (
    validation_code,
    email,
    new_password
) => dispatch => {
    request
        .post(`${baseUrl}/reset-password`)
        .set('validation', validation_code)
        .send({
            email,
            new_password,
        })
        .then(response => {
            if (response.ok) {
                const action = getServerMessage(response.body.message);
                dispatch(action);
            } else if (!response.ok) {
                const action = getServerMessage(response.body.message);
                dispatch(action);
            }
        })
        .catch(console.error);
};
