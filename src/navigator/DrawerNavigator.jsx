import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { TabsNavigator } from "./TabsNavigator";
import { StackAuthNavigator } from "./StackAuthNavigator";
import { StatusBar } from "react-native";
import { View } from "react-native";
import { globalThemes } from "../themes/globalThemes";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartScreen } from "../screens/CartScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { state } = useContext(ThemeContext);
  const { width } = useWindowDimensions();

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
            <Drawer.Screen name="StackAuthNavigator" component={StackAuthNavigator} options={{title:'Inicio de Sesión'}} />
            <Drawer.Screen name="CartScreen" component={CartScreen} options={{title:'Mi Carrito'}} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
};

const Menu = ({ navigation }) => {
  const {
    state: { colors },
    setDarkTheme,
    setLightTheme,
  } = useContext(ThemeContext);
  const [isLogin, setIsLogin] = useState(true);
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
          style={[globalThemes.defaultBtn, { borderColor: colors.primary }]}
        >
          <Text style={[globalThemes.defaulTextBtn, { color: colors.text }]}>
            Light
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={[globalThemes.defaultBtn, { borderColor: colors.primary }]}
        >
          <Text style={[globalThemes.defaulTextBtn, { color: colors.text }]}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>

      {/* Opciones de Menú - Navegación Tabs */}
      <View style={globalThemes.container}>
        {/* Link a Productos */}
        <TouchableOpacity
          style={{ ...globalThemes.menuButton, flexDirection: "row" }}
          onPress={() => console.log("productos")}
        >
          <Text style={{ ...globalThemes.text, color: colors.primary }}>
            - Productos
          </Text>
        </TouchableOpacity>
        {/* Link a Categorías */}
        <TouchableOpacity
          style={{ ...globalThemes.menuButton, flexDirection: "row" }}
          onPress={() => console.log("categorías")}
        >
          <Text style={{ ...globalThemes.text, color: colors.primary }}>
            - Categorías
          </Text>
        </TouchableOpacity>
        {isLogin && (
          <>
          <TouchableOpacity
            style={{ ...globalThemes.menuButton, flexDirection: "row" }}
            onPress={() => navigation.navigate("CartScreen")}
          >
            <Text style={{ ...globalThemes.text, color: colors.primary }}>
              - Mi carrito
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={{ ...globalThemes.menuButton, flexDirection: "row" }}
          onPress={() => setIsLogin(false)}
        >
          <Text style={{ ...globalThemes.text, color: colors.primary }}>
            - Logout
          </Text>
        </TouchableOpacity>
        </>
        )}
        {!isLogin && (
          <>
          <TouchableOpacity
            style={{ ...globalThemes.menuButton, flexDirection: "row" }}
            onPress={() => navigation.navigate("StackAuthNavigator",{screen:'StackAuthNavigator'})}
          >
            <Text style={{ ...globalThemes.text, color: colors.primary }}>
              - Login
            </Text>
          </TouchableOpacity>
          
        </>
        )}
      </View>
    </DrawerContentScrollView>
  );
};
