//Hooks, Funciones
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

//Screens
import WelcomeScreen from "../Views/PrivateScreens/WelcomeScreen";
import LoginScreen from "../Views/PublicScreens/LoginScreen";
import DevicesScreen from "../Views/PrivateScreens/DevicesScreen";
import DrawerNavigatorMenu from "./DrawerMenu/RoutesMenu";
import LogoutButton from "../components/EcommerceAppComponents/ButtonLogout";

const Stack = createStackNavigator();



export const Routes = () => {
  const { token } = useSelector((state) => state.user);

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={token === "" ? "LoginScreen" : "Welcome"}>
      {token ? (
        <>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerRight: () => (
               <LogoutButton/>
              ),
            }}
          />
          <Stack.Screen name="Home" options={{ headerShown: false }} component={DrawerNavigatorMenu} />
          <Stack.Screen name="Devices" component={DevicesScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
  
  );
};
