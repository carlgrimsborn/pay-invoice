import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOvermindActions, useOvermindState } from "../overmind";

const Main = () => {
  const { cleanState } = useOvermindActions();
  const { user } = useOvermindState();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperView}>
        <Text>Hello {user.email}!</Text>
        <Text>pay using button below</Text>
        <Button
          title="Pay"
          onPress={() => navigation.navigate("Payment")}
        ></Button>
      </View>
      <Button title="Log Out" onPress={cleanState}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  upperView: {
    alignItems: "center",
  },
});

export default Main;
