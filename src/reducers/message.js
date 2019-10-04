import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions"
import { messageTimeout } from "../constants"

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SET_MESSAGE:
      return ({
        message: action.payload,
        expires: new Date().getTime() + messageTimeout,
      })
    case CLEAR_MESSAGE:
      return {}
    default:
      return state
  }
}