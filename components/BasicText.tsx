import React from "react";
import { Text, StyleSheet, TextProps } from "react-native";
import { SecondaryInteractive } from "../Colors";

const BasicText: React.FC<TextProps> = ({ children, style }) => {
  return <Text style={[style ? style : [styles.text, style]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: SecondaryInteractive,
  },
});

export default BasicText;
