import React, { useContext, useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import {
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  useWindowDimensions,
  SafeAreaView,
  Button,
  Alert,
  TouchableHighlight,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { TabsNavigator } from './TabsNavigator';
import { StackAuthNavigator } from './StackAuthNavigator';
import { globalThemes } from '../themes/globalThemes';
import { ThemeContext } from '../contexts/ThemeContext';
import { CartScreen } from '../screens/CartScreen';
import { AlertComponent } from '../components/AlertComponent';

const Drawer = createDrawerNavigator();

export const DrawerBiometric = () => {
  const { state } = useContext(ThemeContext);
  const { width } = useWindowDimensions();

  return (
    <>
      <StatusBar backgroundColor={state.colors.primary} />
      <View style={{ backgroundColor: state.colors.primary, flex: 1 }}>
        <NavigationContainer theme={state}>
          <Drawer.Navigator
            screenOptions={{
              drawerPosition: 'left',
              drawerType: width >= 768 ? 'permanent' : 'front',
              headerTintColor: state.colors.background,
              headerStyle: {
                backgroundColor: state.colors.primary,
              },
            }}
            drawerContent={(props) => <Menu {...props} />}
          >
            <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
            <Drawer.Screen
              name="StackAuthNavigator"
              component={StackAuthNavigator}
              options={{ title: 'Inicio de Sesión' }}
            />
            <Drawer.Screen
              name="CartScreen"
              component={CartScreen}
              options={{ title: 'Mi Carrito' }}
            />
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
  const [isLogin, setIsLogin] = useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  //para detección de rostro o escaneo de huella digital

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const fallBackToDefaultAuth = () => {
    //tendría que redireccionar a la pantalla de inicio de sesión
    console.log('volver a autenticación por defecto');
  };

  const handleBiometricAuth = async () => {
    //checkear si el dispositivo soporta biometría
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    //Volver a la autenticación por defecto si el dispositivo no soporta biometría
    if (!isBiometricAvailable) {
      <AlertComponent
        title={'Por favor ingrese su contraseña'}
        mess={'Su dispositivo no admite escaneo de huella'}
        btnTxt={'Ok'}
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
        title={'Datos biometricos no encontrados'}
        mess={'Por favor loguearse con su email y contraseña'}
        btnTxt={'Ok'}
        btnFun={() => fallBackToDefaultAuth()}
      />;
    }
    //autenticarse con datos biométricos
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Loguearse con datos Biométricos',
      cancelLabel: 'Cancelar',
      disableDeviceFallback: true,
    });
    // si la autenticación fue exitosa, mostrar mensaje de bienvenida
    if (biometricAuth) {
      biometricAuth.success ? setIsLogin(true) : setIsLogin(false);
    }
  };

  return (
    <DrawerContentScrollView>
      {/* Contenedor de los botones de cambiar tema */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
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
          style={{ ...globalThemes.menuButton, flexDirection: 'row' }}
          onPress={() => console.log('productos')}
        >
          <Text style={{ ...globalThemes.text, color: colors.primary }}>
            - Productos
          </Text>
        </TouchableOpacity>
        {/* Link a Categorías */}
        <TouchableOpacity
          style={{ ...globalThemes.menuButton, flexDirection: 'row' }}
          onPress={() => console.log('categorías')}
        >
          <Text style={{ ...globalThemes.text, color: colors.primary }}>
            - Categorías
          </Text>
        </TouchableOpacity>
        {isLogin && (
          <>
            <TouchableOpacity
              style={{ ...globalThemes.menuButton, flexDirection: 'row' }}
              onPress={() => handleBiometricAuth()}
              // navigation.navigate("CartScreen")
            >
              <Text style={{ ...globalThemes.text, color: colors.primary }}>
                - Mi carrito
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...globalThemes.menuButton, flexDirection: 'row' }}
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
              style={{ ...globalThemes.menuButton, flexDirection: 'row' }}
              onPress={() =>
                navigation.navigate('StackAuthNavigator', {
                  screen: 'StackAuthNavigator',
                })
              }
            >
              <Text style={{ ...globalThemes.text, color: colors.primary }}>
                - Login
              </Text>
            </TouchableOpacity>
          </>
        )}
        {!isLogin && isBiometricSupported && (
          <>
            <TouchableOpacity
              style={{ ...globalThemes.menuButton, flexDirection: 'row' }}
              onPress={handleBiometricAuth}
            >
              <Text style={{ ...globalThemes.text, color: colors.primary }}>
                - Login
              </Text>
              <Ionicons
                name="finger-print"
                size={35}
                color={colors.contrastColor}
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </DrawerContentScrollView>
  );
};
