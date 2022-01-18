import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOvermindActions, useOvermindState } from "../overmind";
import { KeyboardAwareView } from "react-native-keyboard-aware-view";
import { useNavigation } from "@react-navigation/native";
import FormRow from "../components/FormRow";
import BasicText from "../components/BasicText";
import { SecondaryInteractive } from "../Colors";

const Invoice = () => {
  const { payment } = useOvermindState();
  const { setPayment } = useOvermindActions();
  const [receiver, setReceiver] = useState(
    payment.receiver ? payment.receiver : ""
  );
  const [amount, setAmount] = useState(
    payment.amount ? payment.amount.toString() : ""
  );
  const [dueDate, setDueDate] = useState(
    payment.due_date ? payment.due_date : ""
  );
  const navigation = useNavigation();

  const confirm = () => {
    if (receiver.length === 0 && amount.length === 0 && dueDate.length === 0) {
      Alert.alert("please enter information");
    } else {
      setPayment({
        amount: parseInt(amount),
        due_date: dueDate,
        receiver,
        uri: payment.uri ? payment.uri : "",
      });

      navigation.navigate("Confirmation");
    }
  };

  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.container}>
        <KeyboardAwareView animated={true}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <BasicText style={styles.header}>Scanned image: </BasicText>
            <Image style={styles.image} source={{ uri: payment.uri }}></Image>
            <BasicText style={styles.header2}>
              Is following the information correct?{" "}
            </BasicText>

            <View>
              <FormRow
                title="Reciever: "
                value={receiver}
                onChangeText={(t) => setReceiver(t)}
              />
              <FormRow
                title="Amount: "
                value={amount}
                onChangeText={(t) => setAmount(t)}
              />
              <FormRow
                title="Due date: "
                value={dueDate}
                onChangeText={(t) => setDueDate(t)}
              />
            </View>
          </ScrollView>
        </KeyboardAwareView>
      </View>
      <View>
        <Button
          title="Next"
          onPress={() => {
            confirm();
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  header: { fontSize: 18, marginBottom: 10, color: SecondaryInteractive },
  header2: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    color: SecondaryInteractive,
  },
  button: {
    alignSelf: "flex-end",
  },
});

export default Invoice;
