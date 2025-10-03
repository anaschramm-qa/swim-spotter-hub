import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Button } from "react-native";


type Props = {
  onSignup?: () => void;
  onMockLogin?: () => void; // <<< ADICIONE ESTA PROP
};

export default function LoginScreen({ onSignup, onMockLogin }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          // ajuste o caminho conforme onde o PNG está:
          // se for src/assets: "../assets/..."
          // se for app/assets: "../../assets/..."
          source={require("../assets/farol-itapua-cartoon.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* em dev você pode esconder assim: {__DEV__ && <Button ... />} */}
      <Button title="Entrar (mock)" onPress={onMockLogin} />

      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo de volta</Text>
        <Text style={styles.subtitle}>Faça login para continuar sua jornada na natação.</Text>

        <TextInput placeholder="E-mail" placeholderTextColor="#A0A0A0" style={styles.input} />
        <TextInput placeholder="Senha" placeholderTextColor="#A0A0A0" secureTextEntry style={styles.input} />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.signup}>
          Não tem uma conta?{" "}
          <Text style={styles.signupLink} onPress={onSignup}>
            Cadastre-se
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0D1B2A", // fundo escuro do design system
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D1B2A",
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 20,
    backgroundColor: "#0D1B2A",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#A0A0A0",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#142C44",
    borderRadius: 8,
    padding: 15,
    color: "#fff",
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#1DA1F2",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1DA1F2",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  signup: {
    color: "#A0A0A0",
    textAlign: "center",
  },
  signupLink: {
    color: "#1DA1F2",
    fontWeight: "600",
  },
});
