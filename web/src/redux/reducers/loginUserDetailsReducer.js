import * as types from '../constants';

const initialState = {
  userInfo: null,
  fetchLoginUsersData: false
};

export default function LoginUserDetailsReducer(state = initialState, actions) {
  switch (actions.type) {
    case types.LOGIN_USERS_DETAILS_REQUEST:
      return {
        ...state,
        fetchLoginUsersData: false
      };

    case types.LOGIN_USERS_DETAILS_SUCCESS:
      // const userInfo = actions && actions.params && actions.params.userInfo ? actions.params.userInfo : null;
      return {
        ...state,
        fetchUsersData: true
      };

    case types.LOGIN_USERS_DETAILS_FAILURE:
      return {
        ...state,
        fetchUsersData: true,
        userInfo: null
      };

    default:
      return state;
  }
}
