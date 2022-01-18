import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOvermindState } from "../overmind";

const Invoice = () => {
  const { payment } = useOvermindState();
  const [reciever, setReciever] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Scanned image: </Text>
      <Image style={styles.image} source={{ uri: payment.uri }}></Image>
      <Text style={styles.header2}>Is following the information correct? </Text>
      <View style={styles.formView}>
        <View style={styles.formRow}>
          <Text style={styles.formText}>Reciever: </Text>
          <TextInput
            style={styles.input}
            value={reciever}
            onChangeText={(t) => setReciever(t)}
          ></TextInput>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formText}>Amount: </Text>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={(t) => setAmount(t)}
          ></TextInput>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formText}>Due date: </Text>
          <TextInput
            style={styles.input}
            value={dueDate}
            onChangeText={(t) => setDueDate(t)}
          ></TextInput>
        </View>
      </View>

      <Button title="Next" onPress={() => {}}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 300,
  },
  formView: {
    paddingHorizontal: 80,
    alignItems: "center",
  },
  formRow: {
    flexDirection: "row",
    marginVertical: 20,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    fontSize: 20,
  },
  formText: {
    fontSize: 20,
  },
  header: { fontSize: 18, marginBottom: 10 },
  header2: { fontSize: 18, marginTop: 10, marginBottom: 10 },
  button: {
    alignSelf: "flex-end",
  },
});

export default Invoice;
