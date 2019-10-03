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


export const JWT = 'JWT'

function jwt(payload) {
  return{
    type: JWT,
    payload
  }
}

export const login = (email, password) => dispatch => {  
  request
  .post(`${url}/login`)
  .send({ email, password })
  .then(res => {
    const action = jwt(res.body)
    dispatch(action)
  })
  .catch(console.error)
}

export const GET_USER = 'GET_USER'

function getUser(payload) {
  return{
    type: GET_USER,
    payload
  }
}

export const newUser = (user) => (dispatch) => {  
  request
  .post(`${url}/users`)
  .send(user)
  .then(res => {
    dispatch(getUser(res.body))
  })
  .catch(console.error)
}