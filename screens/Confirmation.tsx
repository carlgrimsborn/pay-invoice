import { useNavigation } from "@react-navigation/native";
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
import { useOvermindActions, useOvermindState } from "../overmind";

const Confirmation = () => {
  const { payment } = useOvermindState();
  const { paymentMethod } = useOvermindActions();
  const amount = payment.amount ? payment.amount : 0;
  const navigation = useNavigation();

  const finalizePayment = (index: number) => {
    if (index === 0) {
      paymentMethod({
        type: "basic",
      });
    } else if (index === 1) {
      paymentMethod({
        type: "extended",
      });
    } else if (index === 2) {
      paymentMethod({
        type: "splitted",
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>How do you wish to pay?</Text>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.buttons}>
          <ConfirmationButton
            amount={amount + " kr"}
            title="Pay now"
            onPress={() => finalizePayment(0)}
          />
          <ConfirmationButton
            amount={amount + " kr"}
            title="Pay in 30 days"
            onPress={() => finalizePayment(1)}
          />
          <ConfirmationButton
            amount={amount / 12 + " kr / month"}
            title="Split in 12 months"
            onPress={() => finalizePayment(2)}
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
