import { combineReducers } from "redux"

import message from "./message"
import user from "./user"
import users from "./users"
import events from "./events"
import rightDate from "./rightDate"
import validationType from './validationType'

export default combineReducers({
  message,
  user,
  events,
  rightDate,
  validationType,
  users
})