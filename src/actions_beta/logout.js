import lscache from 'lscache'

export const deleteToken = (payload) => {
    return {
        type: 'LOGOUT_SUCCESS',
        payload
    };
};

export const logout = () => {
    return function (dispatch, getState) {
        lscache.flush()
        dispatch(deleteToken(null))
    }
}