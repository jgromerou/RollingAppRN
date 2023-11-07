import React, { useContext } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SearchProductsScreen } from '../screens/SearchProductsScreen';
import { ThemeContext } from '../contexts/ThemeContext';

const Tab = createMaterialBottomTabNavigator();

export const TabsNavigator = () => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderColor: colors.border,
          borderWidth: 0,
          borderRadius: 50,
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          elevation: 0,
          height: 50,
          // overflow: 'hidden',
          // marginHorizontal:20,
        },

        tabBarLabelStyle: {
          fontSize: 15,
          color: colors.background,
          fontSize: 0,
        },

        tabBarIconStyle: {},

        tabBarActiveTintColor: 'green',
        tabBarLabelStyle: { textAlign: 'center' },
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          borderBottomColor: colors.background,
          borderBottomWidth: 2,
        },
      }}
    >
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          title: 'Productos',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home-circle"
              color={colors.border}
              size={28}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Mi Perfil',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="face-man-profile"
              color={colors.border}
              size={28}
            />
          ),
        }}
      />

      <Tab.Screen
        name="SearchProductsScreen"
        component={SearchProductsScreen}
        options={{
          title: 'Buscar',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="note-search"
              color={colors.border}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
