import 'react-native-gesture-handler';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { ThemeProvider } from './src/providers/ThemeProvider';

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
