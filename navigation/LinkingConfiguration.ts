import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { LoginStackParamList, RootStackParamList } from "./types";

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Main: "Main",
      Payment: "Payment",
      Invoice: "Invoice",
      Confirmation: "Confirmation",
      Summary: "Summary",
    },
  },
};

export const linkingLogin: LinkingOptions<LoginStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Login: "Login",
    },
  },
};
