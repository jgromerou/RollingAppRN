import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  return (
    <Stack.Navigator
      // initialRouteName='ProductsScreen'
      screenOptions={{
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
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
