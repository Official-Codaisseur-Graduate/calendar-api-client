import { combineReducers } from 'redux';
import users from './users';
import validationType from './validation';
import events from './events';
import message from './message';

export default combineReducers({
  users,
  validationType,
  events,
  message
});
