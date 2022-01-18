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
import { ImageBackground, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator<RootStackParamList>();

const headerURL = require("../static/images/logo_qred_primary.png");
const backgroundIMG1 = require("../static/images/backgroudn_cubes_tiled.png");
const backgroundIMG2 = require("../static/images/background_diamonds_tiled.png");
const backgroundIMG3 = require("../static/images/background_cubes_full.png");

const Header: React.FC = () => (
  <View style={{ alignItems: "center", justifyContent: "center" }}>
    <Image style={{ width: 60, height: 60 }} source={headerURL}></Image>
  </View>
);

const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      contentStyle: { backgroundColor: "transparent" },
      header: () => <Header />,
    }}
  >
    <Stack.Screen name="Main" component={Main}></Stack.Screen>
    <Stack.Screen
      name="Payment"
      component={Payment}
      options={{ headerTitle: "Scan your dokument" }}
    ></Stack.Screen>
    <Stack.Screen name="Invoice" component={Invoice}></Stack.Screen>
    <Stack.Screen name="Confirmation" component={Confirmation}></Stack.Screen>
  </Stack.Navigator>
);

const LoginStack = createNativeStackNavigator<LoginStackParamList>();
const SummaryStack = createNativeStackNavigator<SummaryStackParamList>();

const LoginNavigator = () => (
  <LoginStack.Navigator
    screenOptions={{
      contentStyle: { backgroundColor: "transparent" },
      header: () => <Header />,
    }}
  >
    <LoginStack.Screen name="Login" component={Login}></LoginStack.Screen>
  </LoginStack.Navigator>
);

const SummaryNavigator = () => (
  <SummaryStack.Navigator
    screenOptions={{
      contentStyle: { backgroundColor: "transparent" },
      header: () => <Header />,
    }}
  >
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
      <ImageBackground source={backgroundIMG2} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer theme={DefaultTheme}>
            <SummaryNavigator></SummaryNavigator>
          </NavigationContainer>
        </SafeAreaView>
      </ImageBackground>
    );
  } else if (isLoggedIn) {
    return (
      <ImageBackground source={backgroundIMG1} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer
            linking={LinkingConfiguration}
            theme={DefaultTheme}
          >
            <RootNavigator></RootNavigator>
          </NavigationContainer>
        </SafeAreaView>
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground source={backgroundIMG3} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer theme={DefaultTheme}>
            <LoginNavigator></LoginNavigator>
          </NavigationContainer>
        </SafeAreaView>
      </ImageBackground>
    );
  }
};

export default Navigation;
