import { useReducer } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { AuthReducer } from '../reducers/AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { types } from '../types/types';
import { dashAxios } from '../config/dashAxios';

const initialState = {
  isLogged: false,
  user: null,
  errorMessage: '',
  isLoading: true,
  successRegister: false
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async (values) => {
    try {
      let emailMinusculas = values.email.toLowerCase();
      const { data } = await dashAxios.post('auth/registerclient', {
        firstname: values.firstname,
        lastname: values.lastname,
        email: emailMinusculas,
        password: values.password,
      });

      dispatch({
        type: types.auth.registerUser,
        payload: {
          errorMessage: '',
          successRegister: true
        },
      });
      setTimeout(()=>{
        dispatch({
          type: types.auth.registerUser,
          payload: {
            successRegister: false
          },
        });
      
      },3000)
    } catch (error) {
      const { msg } = error.response.data.errores[0];
      dispatch({
        type: types.auth.error,
        payload: {
          errorMessage: msg,
        },
      });
      setTimeout(() => {
        dispatch({
          type: types.auth.error,
          payload: {
            errorMessage: '',
          },
        });

      },2000)
    }
  };

  const checkAuthToken = async () => {
    try {
      const token = AsyncStorage.getItem('tokenAuth');
      if (!token) {
        return dispatch({
          type: types.auth.logout,
        });
      }
      const { data } = await dashAxios.get(`auth/revalidatetoken`);
      AsyncStorage.setItem('tokenAuth', data.res.token);
      dispatch({
        type: types.auth.login,
        payload: {
          user: data.res,
          errorMessage:''
        },
      });
    } catch (error) {
      AsyncStorage.removeItem('tokenAuth');
      dispatch({
        type: types.auth.error,
        payload: {
          errorMessage: 'Error reiniciando sesión, debe loguearse nuevamente',
        },
      });
      setTimeout(() => {
        dispatch({
          type: types.auth.error,
          payload: {
            errorMessage: '',
          },
        });

      },2000)
    }
  };

  const login = async ({ email, password }) => {
    try {
      let emailMinusculas = email.toLowerCase();
      const { data } = await dashAxios.post('auth/login', {
        email: emailMinusculas,
        password,
      });
      await AsyncStorage.setItem('tokenAuth', data.token);
      dispatch({
        type: types.auth.login,
        payload: {
          user: data,
          errorMessage:''
        },
      });
    } catch (error) {
      const { msg } = error.response.data.errores[0];
      dispatch({
        type: types.auth.error,
        payload: {
          errorMessage: msg,
        },
      });
      setTimeout(() => {
        dispatch({
          type: types.auth.error,
          payload: {
            errorMessage: '',
          },
        });

      },2000)
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
