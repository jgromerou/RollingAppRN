import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#212B36" />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
