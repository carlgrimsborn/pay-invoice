import React from "react";
import { View, StyleSheet, Text, Button, SafeAreaView } from "react-native";
import { useOvermindActions, useOvermindState } from "../overmind";

const Summary = () => {
  const { pressHome } = useOvermindActions();
  const { payment } = useOvermindState();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.t1}>Success!</Text>
      <View style={{ alignItems: "center", marginBottom: 100 }}>
        <Text style={styles.t2}>your invoice: </Text>
        <View style={styles.v}>
          <Text>Reciver: </Text>
          <Text>{payment.receiver}</Text>
        </View>
        <View style={styles.v}>
          <Text>Amount: </Text>
          <Text>{payment.amount + "kr"}</Text>
        </View>
        <View style={styles.v2}>
          <Text>Due date: </Text>
          <Text>{payment.due_date}</Text>
        </View>
      </View>
      <Button title="Home" onPress={pressHome}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  t1: { fontSize: 20, marginTop: 20 },
  t2: { marginBottom: 20, fontSize: 20 },
  v: { flexDirection: "row", marginBottom: 10 },
  v2: { flexDirection: "row" },
});

export default Summary;
