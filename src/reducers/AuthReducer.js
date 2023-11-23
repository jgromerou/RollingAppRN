import { types } from '../types/types';

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case types.auth.login:
      return {
        ...state,
        user: action.payload.user,
        isLogged: true,
        errorMessage: '',
        isLoading: false,
      };

    case types.auth.logout:
      return {
        ...state,
        user: null,
        isLogged: false,
        errorMessage: action.payload.errorMessage,
        isLoading: false,
      };

    case types.auth.error:
      return {
        ...state,
        user: null,
        isLogged: false,
        isLoading: false,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
};
