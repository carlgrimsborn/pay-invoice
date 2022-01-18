import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
};

const FormRow: React.FC<Props> = ({ value, onChangeText, title }) => {
  return (
    <View style={styles.formRow}>
      <Text style={styles.formText}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  formRow: {
    flexDirection: "row",
    marginVertical: 20,
    width: "90%",
    justifyContent: "space-around",
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    fontSize: 20,
  },
  formText: {
    fontSize: 20,
  },
});

export default FormRow;
