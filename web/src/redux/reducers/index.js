import { combineReducers } from 'redux';
import LoginUserDetailsReducer from './loginUserDetailsReducer';
import StaticDropdownReducer from './staticDropdownReducer';
import EmployeeReducer from './employeeReducer';
import ThemeReducer from './themeSettingReducer';

export default combineReducers({
  LoginUserDetailsReducer,
  StaticDropdownReducer,
  EmployeeReducer,
  ThemeReducer
});
