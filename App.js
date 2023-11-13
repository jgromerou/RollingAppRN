import "react-native-gesture-handler";
import { DrawerNavigator } from "./src/navigator/DrawerNavigator";
import { AuthProvider } from "./src/providers/AuthProvider";
import { ThemeProvider } from "./src/providers/ThemeProvider";

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
