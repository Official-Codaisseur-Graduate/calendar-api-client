import { SET_USER } from "../actions"

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case SET_USER:
      return action.payload
    default:
      return state
  }
}