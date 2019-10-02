import request from 'superagent'

const url = 'http://localhost:4000'

export const GET_EVENTS = 'GET_EVENTS'

function setEvents(payload) {
  return {
    type: GET_EVENTS,
    payload
  }
}

export const getEvents = (year, month, day) => dispatch => {
  request
    .get(`${url}/events/${year}/${month}/${day}`)
    .then(res => {
      const action = setEvents(res.body)
      dispatch(action)
    })
    .catch(console.error)
}

export const CHOSEN_DATE = 'CHOSEN_DATE'

function date(payload) {
  return {
    type: CHOSEN_DATE,
    payload
  }
}

export const chosenDate = (year, month, day) => dispatch => {
  const dateObject = { year: year, month: month, day: day}
  const action = date(dateObject)
  dispatch(action)
}