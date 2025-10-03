import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

export default function Input(props: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor="#9AA6B2"
      style={styles.input}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#142C44", // DS: campo escuro
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    marginBottom: 14,
  },
});