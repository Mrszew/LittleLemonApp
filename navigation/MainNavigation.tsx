import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home";
import Logged from "../screens/Logged";


const Stack = createStackNavigator();

const MainNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name={Routes.Home} component={Home}/>
            <Stack.Screen name={Routes.Logged} component={Logged}/>
        </Stack.Navigator>
    )
};

export default MainNavigation;