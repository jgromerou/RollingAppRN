import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabsNavigator } from './TabsNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
    </Drawer.Navigator>
  );
};
