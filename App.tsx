import { StyleSheet, Text, View } from "react-native";
import { config } from "./overmind";
import { Provider } from "overmind-react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createOvermind } from "overmind";
import React from "react";
import Navigation from "./navigation";

export default function App() {
  const overmind = createOvermind(config);
  return (
    <Provider value={overmind}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
