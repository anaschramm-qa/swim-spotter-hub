import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Stack, useRouter } from "expo-router";
import Input from "../src/components/Input";
import PrimaryButton from "../src/components/PrimaryButton";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleRegister() {
    // TODO: validações e chamada de API
    // por enquanto, só navega para /login
    router.replace("/login");
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <KeyboardAvoidingWidget>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>Cadastrar</Text>

            <Input placeholder="Nome" value={name} onChangeText={setName} autoCapitalize="words" />
            <Input placeholder="E-mail" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
            <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
            <Input placeholder="Confirmar senha" value={confirm} onChangeText={setConfirm} secureTextEntry />

            <PrimaryButton title="Cadastrar" onPress={handleRegister} />

            <Text style={styles.footer}>
              Já tem uma conta?{" "}
              <Text style={styles.link} onPress={() => router.replace("/login")}>Entrar</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingWidget>
    </>
  );
}

function KeyboardAvoidingWidget({ children }: { children: React.ReactNode }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: "padding", android: undefined })}
      style={{ flex: 1, backgroundColor: "#0D1B2A" }}
    >
      {children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#0D1B2A", // DS: fundo
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#0F2235",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },
  footer: {
    textAlign: "center",
    color: "#9AA6B2",
    marginTop: 16,
  },
  link: {
    color: "#1DA1F2",
    fontWeight: "700",
  },
});
