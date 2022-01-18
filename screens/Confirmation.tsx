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
import { SecondaryInteractive } from "../Colors";
import BasicText from "../components/BasicText";
import ConfirmationButton from "../components/ConfirmationButton";
import { useOvermindActions, useOvermindState } from "../overmind";

const Confirmation = () => {
  const { payment } = useOvermindState();
  const { paymentMethod, setPaymentType } = useOvermindActions();
  const amount = payment.amount ? payment.amount : 0;
  const navigation = useNavigation();

  const finalizePayment = (index: number) => {
    if (index === 0) {
      setPaymentType({ type: "basic" });
    } else if (index === 1) {
      setPaymentType({ type: "extended" });
    } else if (index === 2) {
      setPaymentType({ type: "splitted" });
    }
    paymentMethod();
  };

  return (
    <SafeAreaView style={styles.container}>
      <BasicText style={styles.headerText}>How do you wish to pay?</BasicText>
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
    color: SecondaryInteractive,
  },
  buttons: {
    flex: 1,
    justifyContent: "center",
  },
});
export default Confirmation;
