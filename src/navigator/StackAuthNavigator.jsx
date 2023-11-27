import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export const StackAuthNavigator = () => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName='LoginScreen'
      screenOptions={{
        title: 'Inicio de sesión',
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.background,
        },

        headerStyle: {
          borderBottomColor: '#000',
          borderBottomWidth: 1,
          elevation: 5,
          shadowColor: '#000',
        },
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
