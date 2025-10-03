import { Stack, useRouter } from "expo-router";
import LoginScreen from "../src/screens/LoginScreen";

export default function Page() {
  const router = useRouter();
  const goRegister = () => router.push("/register");
  const mockLogin = () => router.replace("../feed"); 
  // por quê replace? evita que o usuário volte para a tela de login ao tocar "voltar"
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <LoginScreen onSignup={() => router.push("/register")} />
    </>
  );
}
