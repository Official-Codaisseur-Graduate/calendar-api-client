export const setDate = payload => {
  return {
    type: 'SET_DATE',
    payload
  };
};

export const selectDate = (year, month, day) => {
  return function(dispatch) {
    const dateObject = {
      year,
      month,
      day
    };
    dispatch(setDate(dateObject));
  };
};
