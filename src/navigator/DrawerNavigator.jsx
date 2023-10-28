import React, {useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabsNavigator } from './TabsNavigator';
import { LoginScreen } from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  const [isLogin, setIsLogin] = useState(false);

  if(isLogin){
    return (
      <Drawer.Navigator
      screenOptions={
        {
          title: 'RollingRN',
        }
      }>
        <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
      </Drawer.Navigator>
    );
  }
  if(!isLogin){
    return (
      <Drawer.Navigator >
      <Drawer.Screen name="Home" options={{title: 'LOGIN', headerShown: false}} component={LoginScreen} />
    </Drawer.Navigator>
    )
  }
};
