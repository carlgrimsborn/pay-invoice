import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Primary, SecondaryInteractive } from "../Colors";
import BasicText from "./BasicText";

type Props = {
  title: string;
  amount: string;
  onPress: () => void;
};

const ConfirmationButton: React.FC<Props> = ({ title, amount, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <BasicText>{title}</BasicText>
      <BasicText style={styles.buttonSubText}>{amount}</BasicText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    borderWidth: 1,
    borderColor: SecondaryInteractive,
    marginTop: 20,
    backgroundColor: Primary,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 20,
  },

  buttonSubText: {
    fontSize: 16,
    color: SecondaryInteractive,
  },
});

export default ConfirmationButton;
