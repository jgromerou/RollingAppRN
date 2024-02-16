import React, { useContext } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StackNavigator } from "./StackNavigator";
import { SearchProductsScreen } from "../screens/SearchProductsScreen";
import { ThemeContext } from "../contexts/ThemeContext";
import { ProductsList } from "../screens/ProductsList";
import { Text } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export const TabsNavigator = () => {
  const {
    state: { colors },
  } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.tabsColor}
      inactiveColor={colors.tabsColor}
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        labelStyle: {
          fontSize: 50,
        },
      }}
    >
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          tabBarLabel: (
            <Text style={{ fontSize: 18, paddingTop: 4, fontWeight: "bold" }}>
              Inicio
            </Text>
          ),
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home-circle" size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="ProductsList"
        component={ProductsList}
        options={{
          tabBarLabel: (
            <Text style={{ fontSize: 18, paddingTop: 4, fontWeight: "bold" }}>
              Productos
            </Text>
          ),
          tabBarIcon: () => (
            <MaterialCommunityIcons name="shoe-sneaker" size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
