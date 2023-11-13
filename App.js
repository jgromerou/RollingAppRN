import 'react-native-gesture-handler';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
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
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
