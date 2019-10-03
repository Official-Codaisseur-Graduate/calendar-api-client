import {JWT} from '../actions'
import { GET_USER } from '../actions'

export default function user(state = '', action = {}) {
  switch (action.type) {
    case JWT:
      return action.payload
    case GET_USER:
      return [action.payload, ...state]
    default:
      return state
  }
}
