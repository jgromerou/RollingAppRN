import "react-native-gesture-handler";
// import { DrawerNavigator } from "./src/navigator/DrawerNavigator";
import { DrawerBiometric } from "./src/navigator/DrawerBiometric";
import { AuthProvider } from "./src/providers/AuthProvider";
import { ThemeProvider } from "./src/providers/ThemeProvider";

const App = () => {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          {/* <DrawerNavigator /> */}
          <DrawerBiometric />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
