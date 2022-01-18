import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Primary, SecondaryInteractive } from "../Colors";
import BasicButton from "../components/BasicButton";
import BasicText from "../components/BasicText";
import { useOvermindActions, useOvermindState } from "../overmind";

const Main = () => {
  const { cleanState } = useOvermindActions();
  const { user } = useOvermindState();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperView}>
        <BasicText>Hello {user.email}!</BasicText>
        <BasicText style={styles.text}>
          start paying using the button below
        </BasicText>

        <BasicButton
          title="Pay"
          onPress={() => navigation.navigate("Payment")}
        ></BasicButton>
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
    marginTop: 100,
  },
  text: {
    fontSize: 20,
    color: SecondaryInteractive,
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: Primary,
    width: 100,
    height: 75,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
