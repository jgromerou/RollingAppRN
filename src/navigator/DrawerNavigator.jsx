import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { TabsNavigator } from './TabsNavigator';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import { globalThemes } from '../themes/globalThemes';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <StatusBar backgroundColor="red" />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerPosition: 'left',
            drawerType: width >= 768 ? 'permanent' : 'front',
          }}
          drawerContent={(props) => <Menu {...props} />}
        >
          <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

const Menu = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      {/* Contenedor de los botones de cambiar tema */}
      <View>{/* Aqui van los botones de cambio de tema*/}</View>

      {/* Opciones de Menú - Navegación Tabs */}
      <View style={globalThemes.menuContainer}>
        <TouchableOpacity
          style={{ ...globalThemes.menuButton, flexDirection: 'row' }}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Text style={globalThemes.menuText}> Navegación Tabs</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
