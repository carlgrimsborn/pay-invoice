import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import LinkingConfiguration from "./LinkingConfiguration";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginStackParamList, RootStackParamList } from "./types";
import Main from "../screens/Main";
import Payment from "../screens/Payment";
import Login from "../screens/Login";
import { useState } from "../overmind";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={Main}></Stack.Screen>
    <Stack.Screen name="Payment" component={Payment}></Stack.Screen>
  </Stack.Navigator>
);

const LoginStack = createNativeStackNavigator<LoginStackParamList>();

const LoginNavigator = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Login" component={Login}></LoginStack.Screen>
  </LoginStack.Navigator>
);

const Navigation = () => {
  const { isLoggedIn } = useState();
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
      {isLoggedIn ? (
        <RootNavigator></RootNavigator>
      ) : (
        <LoginNavigator></LoginNavigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
