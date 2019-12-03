import { combineReducers } from 'redux';
import users from './users';
import validationType from './validation';
import rightDate from './rightDate';
import events from './events';

export default combineReducers({
  users,
  validationType,
  rightDate,
  events
});
