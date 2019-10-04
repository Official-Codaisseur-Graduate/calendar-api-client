import { SET_VALIDATIONTYPE } from "../actions"

export default function user(state = "", action = {}) {
  switch (action.type) {
    case SET_VALIDATIONTYPE:
      return action.payload
    default:
      return state
  }
}