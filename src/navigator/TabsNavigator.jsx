import React, { useContext } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StackNavigator } from "./StackNavigator";
import { SearchProductsScreen } from "../screens/SearchProductsScreen";
import { ThemeContext } from "../contexts/ThemeContext";
import { ProductsList } from "../screens/ProductsList";

const Tab = createMaterialBottomTabNavigator();

export const TabsNavigator = () => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.titleColor}
      inactiveColor={colors.text}
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          title: "Inicio",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home-circle" size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="ProductsList"
        component={ProductsList}
        options={{
          title: "Productos",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="shoe-sneaker" size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
