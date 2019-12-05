export const setDate = payload => {
    return {
        type: 'SET_CURRENT_MONTH',
        payload,
    };
};

export const selectDate = (year, month) => {
    return function(dispatch) {
        const dateObject = {
            year,
            month,
        };
        dispatch(setDate(dateObject));
    };
};
