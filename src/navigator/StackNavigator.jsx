import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { ThemeContext } from '../contexts/ThemeContext';
import { ProductsScreen } from '../screens/products/ProductsScreen'
import { CheckoutScreen } from '../screens/carts/CheckoutScreen';
import { ConfirmCart } from '../components/products/ConfirmCart';
import { ConfirmPay } from '../components/products/ConfirmPay';

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
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen name="ConfirmCart" component={ConfirmCart} />
      <Stack.Screen name="ConfirmPay" component={ConfirmPay} />
    </Stack.Navigator>
  );
};
