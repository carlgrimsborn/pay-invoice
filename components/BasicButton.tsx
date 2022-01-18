import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Primary, SecondaryAccent, SecondaryInteractive } from "../Colors";
import BasicText from "./BasicText";

type Props = {
  onPress: () => void;
  title: string;
};

const BasicButton: React.FC<Props> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <BasicText> {title} </BasicText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Primary,
    borderRadius: 25,
    width: 100,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: SecondaryInteractive,
  },
  text: { fontSize: 20, color: SecondaryInteractive },
});
export default BasicButton;
