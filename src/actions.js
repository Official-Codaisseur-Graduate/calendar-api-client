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
    .get(`${url}/events`)
    .then(res => {
      const action = setEvents(res.body)
      dispatch(action)
    })
    .catch(console.error)
}