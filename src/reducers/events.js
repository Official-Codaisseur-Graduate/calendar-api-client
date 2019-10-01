import { GET_EVENTS } from '../actions'

export default function events(state = [], action = {}) {
  switch (action.type) {
    case GET_EVENTS:
      return action.payload
    default:
      return state
  }
}