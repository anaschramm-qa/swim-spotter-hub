import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & { title: string };
export default function PrimaryButton({ title, style, ...rest }: Props) {
  return (
    <TouchableOpacity style={[styles.btn, style]} activeOpacity={0.9} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#1DA1F2", // DS: azul principal
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
});
