export const setDate = (payload) => {
    return {
        type: 'SET_DATE',
        payload
    }
}

export const selectDate = (year, month, day) => {
    return function (dispatch, getState) {
        const dateObject = {
            year: year,
            month: month,
            day: day
        }
        dispatch(setDate(dateObject))
    }
}