import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { StackNavigator } from "./StackNavigator";
import { ProfileScreen } from "../screens/ProfileScreen";
import { SearchProductsScreen } from "../screens/SearchProductsScreen";

const Tab = createMaterialBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      inactiveColor="#637381"
      barStyle={{ backgroundColor: "#212B36" }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          title: "Productos",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home-circle"
              
              size={28}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Mi Perfil",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={28}
            />
          ),
        }}
      />

      <Tab.Screen
        name="SearchProductsScreen"
        component={SearchProductsScreen}
        options={{
          title: "Buscar",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="note-search"
              
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
