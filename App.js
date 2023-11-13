import "react-native-gesture-handler";
import { DrawerNavigator } from "./src/navigator/DrawerNavigator";
import { AuthProvider } from "./src/providers/AuthProvider";
import { ThemeProvider } from "./src/providers/ThemeProvider";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { CartProvider } from './src/providers/CartProvider';

const App = () => {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <DrawerNavigator />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
