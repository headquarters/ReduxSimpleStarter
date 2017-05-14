import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth-reducer';
import message from './message-reducer';

const rootReducer = combineReducers({
  form,
  auth,
  message
});

export default rootReducer;
