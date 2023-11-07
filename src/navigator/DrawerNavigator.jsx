import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabsNavigator } from './TabsNavigator';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <>
      <StatusBar backgroundColor="red" />
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};
