import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  amount: string;
  onPress: () => void;
};

const ConfirmationButton: React.FC<Props> = ({ title, amount, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      <Text style={styles.buttonSubText}>{amount}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 20,
    backgroundColor: "lightblue",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
  },
  buttonSubText: {
    fontSize: 16,
  },
});

export default ConfirmationButton;
