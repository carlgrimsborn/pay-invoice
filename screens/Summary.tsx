import React from "react";
import { View, StyleSheet, Button, SafeAreaView } from "react-native";
import BasicText from "../components/BasicText";
import { useOvermindActions, useOvermindState } from "../overmind";

const Summary = () => {
  const { pressHome } = useOvermindActions();
  const { payment } = useOvermindState();
  return (
    <SafeAreaView style={styles.container}>
      <BasicText style={styles.t1}>Success!</BasicText>
      <View style={{ alignItems: "center", marginBottom: 100 }}>
        <BasicText style={styles.t2}>Your invoice: </BasicText>
        <View style={styles.v1}>
          <BasicText>Reciver: </BasicText>
          <BasicText>{payment.receiver}</BasicText>
        </View>
        <View style={styles.v1}>
          <BasicText>Amount: </BasicText>
          <BasicText>{payment.amount + "kr"}</BasicText>
        </View>
        <View style={styles.v1}>
          <BasicText>Due date: </BasicText>
          <BasicText>{payment.due_date}</BasicText>
        </View>
        <View style={styles.v2}>
          <BasicText>Type: </BasicText>
          <BasicText>
            {payment.type === "basic"
              ? "Paying now"
              : payment.type === "extended"
              ? "Paying in 30 days"
              : payment.type === "splitted"
              ? "Splitted in 12 months"
              : "could not get type"}
          </BasicText>
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
  v1: { flexDirection: "row", marginBottom: 10 },
  v2: { flexDirection: "row" },
});

export default Summary;
