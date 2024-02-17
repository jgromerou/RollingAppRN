import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication";
import { Ionicons } from "@expo/vector-icons";

import { Dimensions, useWindowDimensions } from "react-native";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { TabsNavigator } from './TabsNavigator';
import { StackAuthNavigator } from './StackAuthNavigator';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import { globalThemes } from '../themes/globalThemes';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { CustomLoading } from '../components/CustomLoading';
import { Image } from 'react-native';
import { ThemeSwitch } from "../components/ThemeSwitch";

const Drawer = createDrawerNavigator();

const screenHeight = Dimensions.get("window").height;

export const DrawerNavigator = () => {
  const { state } = useContext(ThemeContext);
  const { state: stateAuth, checkAuthToken } = useContext(AuthContext);
  const { width } = useWindowDimensions();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (stateAuth.isLoading) {
    return <CustomLoading />;
  }

  if (stateAuth.isLogged) {
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
              <Drawer.Screen
                name="TabsNavigator"
                options={{ title: "Sportify" }}
                component={TabsNavigator}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      </>
    );
  } else {
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
              <Drawer.Screen
                name="StackAuthNavigator"
                options={{ title: "Inicio de Sesión" }}
                component={StackAuthNavigator}
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

  const { state, logout } = useContext(AuthContext);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const fallBackToDefaultAuth = () => {
  };

  const handleBiometricAuth = async () => {
    //checkear si el dispositivo soporta biometría
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    //Volver a la autenticación por defecto si el dispositivo no soporta biometría
    if (!isBiometricAvailable) {
      <AlertComponent
        title={"Por favor ingrese su contraseña"}
        mess={"Su dispositivo no admite escaneo de huella"}
        btnTxt={"Ok"}
        btnFun={() => fallBackToDefaultAuth()}
      />;
    }
    //chequea tipos de biometrics disponibles (huella, reconocimiento facial, reconocimiento de iris)
    let supportedBiometrics;
    if (isBiometricAvailable) {
      supportedBiometrics =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
    }
    //chequea si el dispositivo tiene guardada los datos biométricos del usuario
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      <AlertComponent
        title={"Datos biometricos no encontrados"}
        mess={"Por favor loguearse con su email y contraseña"}
        btnTxt={"Ok"}
        btnFun={() => fallBackToDefaultAuth()}
      />;
    }
    //autenticarse con datos biométricos
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Loguearse con datos Biométricos",
      cancelLabel: "Cancelar",
      disableDeviceFallback: true,
    });
    // si la autenticación fue exitosa, mostrar mensaje de bienvenida
    if (biometricAuth) {
      biometricAuth.success
        ? navigation.navigate("CartScreen")
        : navigation.navigate("HomeScreen");
    }
  };

  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: screenHeight - 5,
        }}
      >
        {/* Opciones de Menú - Navegación Tabs */}
        <View
          style={
            ([globalThemes.container],
            { backgroundColor: colors.background, flex: 1 })
          }
        >
          {/* Contenedor del avatar */}
          <View style={globalThemes.avatarContainer}>
            <Image
              style={globalThemes.avatar}
              source={require("../../assets/avatar_2.jpg")}
            />
          </View>
          {/* Contenedor de cambiar tema */}
          <View
            style={{
              alignItems: "center",
              backgroundColor: colors.background,
            }}
          >
            <ThemeSwitch />
          </View>

          {state.isLogged && (
            <>
              {/* Link a Inicio */}
              <TouchableOpacity
                style={{ flexDirection: "row", justifyContent: "flex-start", paddingStart: "8%" }}
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <Text style={{ ...globalThemes.text, color: colors.primary }}>
                  Inicio
                </Text>
              </TouchableOpacity>
              {/* Link a Categorías */}
              <TouchableOpacity
                style={{flexDirection: "row", justifyContent: "flex-start", paddingStart: "8%" }}
                onPress={() => navigation.navigate("CategoriesScreen")}
              >
                <Text style={{ ...globalThemes.text, color: colors.primary }}>
                  Categorías
                </Text>
              </TouchableOpacity>
            </>
          )}
          {state.isLogged && (
            <>
              <TouchableOpacity
                style={{flexDirection: "row", justifyContent: "flex-start", paddingStart: "8%" }}
                onPress={() => logout()}
              >
                <Text style={{ ...globalThemes.text, color: colors.primary }}>
                  Cerrar sesión
                </Text>
              </TouchableOpacity>
            </>
          )}
          {!state.isLogged && (
            <>
              <TouchableOpacity
                style={{flexDirection: "row", justifyContent: "flex-start", paddingStart: "8%" }}
                onPress={() =>
                  navigation.navigate("StackAuthNavigator", {
                    screen: "StackAuthNavigator",
                  })
                }
              >
                <Text style={{ ...globalThemes.text, color: colors.primary }}>
                  Login
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
