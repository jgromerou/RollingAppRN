import 'react-native-gesture-handler';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
//import { DrawerBiometric } from './src/navigator/DrawerBiometric';
import { AuthProvider } from './src/providers/AuthProvider';
import { ThemeProvider } from './src/providers/ThemeProvider';
import { CartProvider } from './src/providers/CartProvider';
import { ProductProvider } from './src/providers/ProductsProvider';

const App = () => {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <ProductProvider>
            <CartProvider>
              <DrawerNavigator />
              {/* <DrawerBiometric /> */}
            </CartProvider>
          </ProductProvider>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
