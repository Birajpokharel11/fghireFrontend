import * as AuthType from './auth.types';

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case AuthType.SIGN_IN_START:
    case AuthType.SIGN_UP_START:
    case AuthType.LOAD_USER_START:
      return {
        ...state,
        loading: true
      };

    case AuthType.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload
      };

    case AuthType.SIGN_IN_SUCCESS:
    case AuthType.SIGN_UP_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case AuthType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };

    case AuthType.LOAD_USER_FAILURE:
    case AuthType.SIGN_IN_FAILURE:
    case AuthType.SIGN_UP_FAILURE:
    case AuthType.SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default authReducer;
