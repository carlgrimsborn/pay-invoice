import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "./types";

const linking: LinkingOptions<RootStackParamList> = {
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

export default linking;
