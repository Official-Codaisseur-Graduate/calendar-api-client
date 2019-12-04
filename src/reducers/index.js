import { combineReducers } from 'redux';
import users from './users';
import validationType from './validation';
import rightDate from './rightDate';
import events from './events';
import error from './error';

export default combineReducers({
  users,
  validationType,
  rightDate,
  events,
  error
});