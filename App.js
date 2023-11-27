import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
//import { DrawerBiometric } from './src/navigator/DrawerBiometric';
import { AuthProvider } from './src/providers/AuthProvider';
import { ThemeProvider } from './src/providers/ThemeProvider';
import { CartProvider } from './src/providers/CartProvider';
import { ProductProvider } from './src/providers/ProductsProvider';
import * as Updates from 'expo-updates';

const App = () => {
  useEffect(() => {
    onFetchUpdateAsync();
  }, []);

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

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
