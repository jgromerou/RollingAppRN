import React, { useEffect, useReducer } from 'react';
import { AppState, Appearance } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { ThemeReducer, darkTheme, lightTheme } from '../reducers/ThemeReducer';

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    ThemeReducer,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme
  ); //el Appearance.getColorScheme() lee tema global del celular hacer el ternario con el darkTheme y el lightTheme..

  //Este permite cambiar el theme segun el Sistema operativo android e ios
  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'dark' ? setLightTheme : setDarkTheme;
      }
    });
  }, []);
  console.log(darkTheme);
  const setDarkTheme = () => {
    dispatch({ type: 'set_dark_theme' });
    console.log('setDarkTheme');
  };

  const setLightTheme = () => {
    dispatch({ type: 'set_light_theme' });
    console.log('setLightTheme');
  };

  return (
    <ThemeContext.Provider value={{ state, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
