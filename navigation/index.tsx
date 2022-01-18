import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import LinkingConfiguration from "./LinkingConfiguration";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LoginStackParamList,
  RootStackParamList,
  SummaryStackParamList,
} from "./types";
import Main from "../screens/Main";
import Payment from "../screens/Payment";
import Login from "../screens/Login";
import { useOvermindState } from "../overmind";
import Invoice from "../screens/Invoice";
import Confirmation from "../screens/Confirmation";
import Summary from "../screens/Summary";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={Main}></Stack.Screen>
    <Stack.Screen name="Payment" component={Payment}></Stack.Screen>
    <Stack.Screen name="Invoice" component={Invoice}></Stack.Screen>
    <Stack.Screen name="Confirmation" component={Confirmation}></Stack.Screen>
  </Stack.Navigator>
);

const LoginStack = createNativeStackNavigator<LoginStackParamList>();
const SummaryStack = createNativeStackNavigator<SummaryStackParamList>();

const LoginNavigator = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Login" component={Login}></LoginStack.Screen>
  </LoginStack.Navigator>
);

const SummaryNavigator = () => (
  <SummaryStack.Navigator>
    <SummaryStack.Screen
      name="Summary"
      component={Summary}
    ></SummaryStack.Screen>
  </SummaryStack.Navigator>
);

const Navigation = () => {
  const { isLoggedIn, completedPayment } = useOvermindState();
  console.log(completedPayment);
  if (isLoggedIn && completedPayment) {
    return (
      <NavigationContainer>
        <SummaryNavigator></SummaryNavigator>
      </NavigationContainer>
    );
  } else if (isLoggedIn) {
    return (
      <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
        <RootNavigator></RootNavigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <LoginNavigator></LoginNavigator>
      </NavigationContainer>
    );
  }
};

export default Navigation;
