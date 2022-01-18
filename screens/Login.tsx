import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import BasicText from "../components/BasicText";
import { useOvermindActions } from "../overmind";

const Login = () => {
  const { login } = useOvermindActions();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <BasicText>Email</BasicText>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={(t) => setemail(t)}
        ></TextInput>
        <BasicText>Password</BasicText>
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={(t) => setpassword(t)}
        ></TextInput>
      </View>
      <Button
        title="Login"
        onPress={async () => {
          await login({ email, password });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 30,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    borderBottomWidth: 1,
    marginBottom: 30,
    marginTop: 10,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Login;
