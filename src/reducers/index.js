import { combineReducers } from 'redux';
import authenticationReducer from './authenication';

const rootReducer = combineReducers({
  authenticated: authenticationReducer
});

export default rootReducer;
