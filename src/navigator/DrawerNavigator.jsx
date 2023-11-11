import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { TabsNavigator } from "./TabsNavigator";
import { StatusBar } from "react-native";
import { View } from "react-native";
import { globalThemes } from "../themes/globalThemes";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
// import { StackLoginNavigator } from "./StackLoginNavigator";
import { LoginScreen } from "../screens/LoginScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { state } = useContext(ThemeContext);
  const { width } = useWindowDimensions();
  const [isLogin, setIsLogin] = useState(false);

  if (isLogin) {
    return (
      <>
        <StatusBar backgroundColor={state.colors.primary} />
        <View style={{ backgroundColor: state.colors.primary, flex: 1 }}>
          <NavigationContainer theme={state}>
            <Drawer.Navigator
              screenOptions={{
                drawerPosition: "left",
                drawerType: width >= 768 ? "permanent" : "front",
                headerTintColor: state.colors.background,
                headerStyle: {
                  backgroundColor: state.colors.primary,
                },
              }}
              drawerContent={(props) => <Menu {...props} />}
            >
              <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      </>
    );
  }
  if (!isLogin) {
    return (
      <>
        <StatusBar backgroundColor={state.colors.primary} />
        <View style={{ backgroundColor: state.colors.primary, flex: 1 }}>
          <NavigationContainer theme={state}>
            <Drawer.Navigator>
              <Drawer.Screen
                name="LOGIN"
                options={{ title: "LOGIN", headerShown: false }}
                component={LoginScreen}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      </>
    );
  }
};

const Menu = ({ navigation }) => {
  const {
    state: { colors },
    setDarkTheme,
    setLightTheme,
  } = useContext(ThemeContext);
  return (
    <DrawerContentScrollView>
      {/* Contenedor de los botones de cambiar tema */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          onPress={setLightTheme}
          activeOpacity={0.8}
          style={{
            width: 80,
            height: 50,
            borderRadius: 20,
            justifyContent: "center",
            borderColor: colors.primary,
            borderWidth: 2,
          }}
        >
          <Text
            style={{ color: colors.text, textAlign: "center", fontSize: 22 }}
          >
            Light
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={{
            width: 80,
            height: 50,
            borderRadius: 20,
            justifyContent: "center",
            borderColor: colors.primary,
            borderWidth: 2,
          }}
        >
          <Text
            style={{ color: colors.text, textAlign: "center", fontSize: 22 }}
          >
            Dark
          </Text>
        </TouchableOpacity>
      </View>

      {/* Opciones de Menú - Navegación Tabs */}
      <View style={globalThemes.menuContainer}>
        <TouchableOpacity
          style={{ ...globalThemes.menuButton, flexDirection: "row" }}
          onPress={() => navigation.navigate("TabsNavigator")}
        >
          <Text style={{ ...globalThemes.menuText, color: colors.primary }}>
            Navegación Tabs
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
