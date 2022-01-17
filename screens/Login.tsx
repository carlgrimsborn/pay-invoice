import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import { useOvermindActions } from "../overmind";

const Login = () => {
  const { login } = useOvermindActions();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.headerInputText}>Email</Text>
      <TextInput
        style={styles.textInput}
        value={email}
        onChangeText={(t) => setemail(t)}
      ></TextInput>
      <Text style={styles.headerInputText}>Password</Text>
      <TextInput
        style={styles.textInput}
        value={password}
        onChangeText={(t) => setpassword(t)}
      ></TextInput>
      <Button
        title="login"
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
    marginBottom: 20,
  },
  headerInputText: {
    fontSize: 20,
  },
  loginButton: {
    backgroundColor: "red",
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
  },
});

export default Login;
