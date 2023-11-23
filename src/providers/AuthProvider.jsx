import { useReducer } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { AuthReducer } from '../reducers/AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { types } from '../types/types';
import { dashAxios } from '../config/dashAxios';

const initialState = {
  isLogged: false,
  user: null,
  //  userInfo: {
  //   id: null,
  //   username: null,
  //   email: null,
  //   password: null,
  //   role: null,
  //   status: null,
  //  },
  // userToken: null,
  errorMessage: '',
  isLoading: true,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async (values) => {
    console.log(values);
    try {
      const { data } = await dashAxios.post('auth/registerclient', {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
      });
      console.log(data);

      dispatch({
        type: types.auth.registerUser,
      });
    } catch (error) {
      const { msg } = error.response.data.errores[0];
      dispatch({
        type: types.auth.logout,
        payload: {
          errorMessage: msg,
        },
      });
    }
  };

  const checkAuthToken = async () => {
    try {
      const token = AsyncStorage.getItem('tokenAuth');
      if (!token) {
        return dispatch({
          type: types.auth.logout,
          payload: {
            errorMessage: '',
          },
        });
      }
      const { data } = await dashAxios.get(`auth/revalidatetoken`);
      AsyncStorage.setItem('tokenAuth', data.res.token);
      //console.log(data,'data')
      dispatch({
        type: types.auth.login,
        payload: {
          user: data.res,
        },
      });
    } catch (error) {
      AsyncStorage.removeItem('tokenAuth');
      dispatch({
        type: types.auth.logout,
        payload: {
          errorMessage: '',
        },
      });
    }
  };

  const login = async ({ email, password }) => {
    try {
      let emailMinusculas = email.toLowerCase();
      const { data } = await dashAxios.post('auth/login', {
        email: emailMinusculas,
        password,
      });
      console.log(data);
      await AsyncStorage.setItem('tokenAuth', data.token);
      dispatch({
        type: types.auth.login,
        payload: {
          user: data,
        },
      });
    } catch (error) {
      const { msg } = error.response.data.errores[0];
      dispatch({
        type: types.auth.logout,
        payload: {
          errorMessage: msg,
        },
      });
    }
  };

  const logout = async () => {
    AsyncStorage.removeItem('tokenAuth');
    dispatch({
      type: types.auth.logout,
      payload: {
        errorMessage: '',
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        state,
        login,
        logout,
        registerUser,
        checkAuthToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
