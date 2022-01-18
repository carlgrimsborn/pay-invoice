import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ConfirmationButton from "../components/ConfirmationButton";
import { useOvermindState } from "../overmind";

const Confirmation = () => {
  const { payment } = useOvermindState();
  const amount = payment.amount ? payment.amount : 0;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>How do you wish to pay?</Text>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.buttons}>
          <ConfirmationButton
            amount={amount + " kr"}
            title="Pay now"
            onPress={() => {}}
          />
          <ConfirmationButton
            amount={amount + " kr"}
            title="Pay in 30 days"
            onPress={() => {}}
          />
          <ConfirmationButton
            amount={amount / 12 + " kr / month"}
            title="Split in 12 month"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  buttons: {
    flex: 1,
    justifyContent: "center",
  },
});
export default Confirmation;
