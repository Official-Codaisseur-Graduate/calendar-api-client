import { combineReducers } from 'redux'
import events from './events'
import rightDate from './rightDate'
import user from './user'

export default combineReducers({
  events,
  rightDate,
  user

})