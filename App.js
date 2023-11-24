import 'react-native-gesture-handler';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
//import { DrawerBiometric } from './src/navigator/DrawerBiometric';
import { AuthProvider } from './src/providers/AuthProvider';
import { ThemeProvider } from './src/providers/ThemeProvider';
import { CartProvider } from './src/providers/CartProvider';

const App = () => {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <CartProvider>
            <DrawerNavigator />
          {/* <DrawerBiometric /> */}
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
