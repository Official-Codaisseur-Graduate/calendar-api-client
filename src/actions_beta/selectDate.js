export const setDate = (payload) => {
    return {
        // type: 'SET_DATE', // this is what I want, but now not possible without breaking everything
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