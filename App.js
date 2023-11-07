import 'react-native-gesture-handler';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="red" />
      <ThemeProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
