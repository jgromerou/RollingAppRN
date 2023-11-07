import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { ThemeContext } from '../contexts/ThemeContext';

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
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
