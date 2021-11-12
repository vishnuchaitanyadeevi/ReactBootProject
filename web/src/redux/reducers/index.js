import { combineReducers } from 'redux';
import LoginUserDetailsReducer from './loginUserDetailsReducer';
import StaticDropdownReducer from './staticDropdownReducer';
import EmployeeReducer from './employeeReducer';

export default combineReducers({
  LoginUserDetailsReducer,
  StaticDropdownReducer,
  EmployeeReducer
});
