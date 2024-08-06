import * as React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from './context/AuthContext';

import SplashScreen from './screens/Splash/SplashScreen';
import OnboardingScreen from './screens/Onboarding/OnboardingScreen';
import HomeScreen from './screens/Home/HomeScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  // useReducer
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOG_IN':
          return {
            ...prevState,
            isLogout: false,
            userToken: action.token,
          };
        case 'LOG_OUT':
          return {
            ...prevState,
            isLogout: true,
            userToken: null,
          };
        default:
          return prevState;
      }
    },
    {
      isLoading: true,
      isLogout: false,
      userToken: null,
    }
  );

  // useEffect
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
  }, []);

  // useMemo
  const authContext = React.useMemo(
    () => ({
      LogIn: async (data) => {
        dispatch({ type: 'LOG_IN', token: 'dummy-auth-token' }); // dummy token
      },
      LogOut: () => dispatch({ type: 'LOG_OUT' }),
      LogUp: async (data) => {
        dispatch({ type: 'LOG_IN', token: 'dummy-auth-token' }); // dummy token
      },
    }),
    []
  );

  return (

    <AuthContext.Provider value={authContext}>

      <SafeAreaProvider>

        <NavigationContainer>

          <Stack.Navigator>

            {state.isLoading ? (

              <Stack.Screen
               name="Splash"
               component={SplashScreen}
               options={{
                 headerShown: false,
               }}
              />

            ) : state.userToken == null ? (

                <Stack.Screen
                 name="Onboarding"
                 component={OnboardingScreen}
                 options={{
                   headerShown: false,
                 }}
                />

            ) : (

              <>
                <Stack.Screen
                 name="Home"
                 component={HomeScreen}
                 options={{
                   headerShown: false,
                 }}
                />
                <Stack.Screen
                 name="Profile"
                 component={ProfileScreen}
                 options={{
                   headerShown: false,
                 }}
                />
              </>

            )}

          </Stack.Navigator>

        </NavigationContainer>

      </SafeAreaProvider>

    </AuthContext.Provider>

  );
}
