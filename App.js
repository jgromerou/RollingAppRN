import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="red" />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
