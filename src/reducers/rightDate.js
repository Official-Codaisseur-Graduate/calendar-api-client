import { CHOSEN_DATE } from '../actions'

export default function rightDate(state = [], action = {}) {
  switch (action.type) {
    case CHOSEN_DATE:
      return action.payload
    default:
      return state
  }
}