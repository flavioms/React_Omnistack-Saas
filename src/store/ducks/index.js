import { combineReducers } from 'redux';
import { reducer as auth } from './auth';
import { reducer as teams } from './teams';

export default combineReducers({
  auth,
  teams,
});
