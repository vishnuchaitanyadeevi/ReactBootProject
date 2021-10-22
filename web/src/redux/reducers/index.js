import { combineReducers } from 'redux';
import LoginUserDetailsReducer from './loginUserDetailsReducer';
import StaticDropdownReducer from './staticDropdownReducer';

export default combineReducers({
  LoginUserDetailsReducer,
  StaticDropdownReducer
});
