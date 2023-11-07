import 'react-native-gesture-handler';
import { ThemeProvider } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <DrawerNavigator />
      </ThemeProvider>
    </>
  );
};

export default App;
