import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Onboarding from "../screens/Onboarding";
import Logged from "../screens/Logged";
import { View, Text, Image, StyleSheet } from 'react-native';




const Stack = createStackNavigator();

const MainNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={Routes.Onboarding} 
            component={Onboarding}
            options={{headerShown:false}}
            />
            <Stack.Screen name={Routes.Logged} component={Logged}/>
        </Stack.Navigator>
    )
};




export default MainNavigation;