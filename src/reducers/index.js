import { combineReducers } from 'redux'
import events from './events'
import rightDate from './rightDate'

export default combineReducers({
  events,
  rightDate
})