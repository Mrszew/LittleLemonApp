import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./navigation/Routes";
import MainNavigation from "./navigation/mainNavigation";

const App = () => {
  return(
    <NavigationContainer>
        <MainNavigation>

        </MainNavigation>
    </NavigationContainer>
  )
};

export default App;