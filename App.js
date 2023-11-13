import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { CartProvider } from './src/providers/CartProvider';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="red" />
      <CartProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </CartProvider>
    </>
  );
};

export default App;
