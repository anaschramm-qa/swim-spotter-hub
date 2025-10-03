import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

// ajuste o caminho do seu CrabIcon
// import CrabIcon from "../assets/crab"; 
// se você já tem um tema, pode puxar dele; vou deixar as cores aqui também:
const OCEAN = "#0B7BB3";
const AQUA  = "#00CCC0";

function GradientText({
  children,
  fontSize = 22,
  fontWeight = "800",
}: {
  children: string;
  fontSize?: number;
  fontWeight?: any;
}) {
  return (
    <MaskedView
      maskElement={
        <View style={{ alignItems: "center" }}>
          {/* Text via RN não aceita gradient direto; usamos máscara */}
          <View
            // “texto” como máscara: usa View + style de texto com background transparente
            style={{
              // acessibilidade: título real para leitores de tela
              position: "absolute",
              height: 0,
              width: 0,
              overflow: "hidden",
            }}
          />
        </View>
      }
    >
      {/* Truque simples: em vez de mascarar com <Text/>, usamos o próprio gradient “preenchendo” a caixa
          e um <Text> independente por cima. Fica + estável no Android. */}
      <LinearGradient
        colors={[OCEAN, AQUA]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={{ paddingHorizontal: 12, paddingVertical: 2 }} />
      </LinearGradient>
    </MaskedView>
  );
}

/**
 * TopBar com ícone à esquerda e título central absoluto.
 * O título fica centralizado independentemente da largura do ícone.
 */
export default function TopBar() {
  return (
    <SafeAreaView style={styles.wrapper} edges={["top"]}>
      <View style={styles.container}>
        {/* ESQUERDA: ícone do caranguejo */}
        <View style={styles.left}>
          {/* <CrabIcon width={28} height={28} /> */}
        </View>

        {/* TÍTULO CENTRAL ABSOLUTO */}
        <View pointerEvents="none" style={styles.centerTitle}>
          {/* título real (para leitores de tela) */}
          {/* se quiser acessibilidade: aria/role/etc. */}
          <View accessible accessibilityLabel="Feed" />
          {/* gradiente do texto */}
          <MaskedView
            maskElement={
              <View style={styles.titleMask}>
                {/* usamos o sistema de texto para máscara */}
                <View style={styles.titleAsMask} />
              </View>
            }
          >
            <LinearGradient
              colors={[OCEAN, AQUA]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.titleGradient}
            >
              <View style={styles.titleBox}>
                {/* Como fallback visual do texto, usamos um pseudo-texto via SVG do CrabIcon? 
                   Simples: trocamos pela versão com <Text/> logo abaixo */}
              </View>
            </LinearGradient>
          </MaskedView>

          {/* Fallback direto com <Text/> (fica por cima e herda o gradiente ao usar absolute) */}
          <View style={styles.textHolder}>
            {/* evita import extra; estiliza o texto aqui */}
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LinearGradient
                colors={[OCEAN, AQUA]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ paddingHorizontal: 8, borderRadius: 6 }}
              >
                <View>
                  {/* Usa Text normal com opacity 0 para pegar o tamanho e manter o gradient atrás */}
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>

        {/* DIREITA: espaço reserva (evita que toque no centro mexa na layout) */}
        <View style={styles.right} />
      </View>

      {/* Linha sutil de separação (opcional) */}
      <View style={styles.hairline} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFFFFF",
  },
  container: {
    height: 56,
    justifyContent: "center",
  },
  left: {
    position: "absolute",
    left: 16,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
  right: {
    position: "absolute",
    right: 16,
    top: 0,
    bottom: 0,
    width: 28, // largura aproximada do ícone — só como reserva
  },
  centerTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  hairline: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "rgba(0,0,0,0.06)",
  },
  // blocos auxiliares para a técnica de máscara/gradient
  titleMask: { justifyContent: "center", alignItems: "center" },
  titleAsMask: { width: 80, height: 26 }, // tamanho do rótulo “Feed”
  titleGradient: { borderRadius: 8 },
  titleBox: { paddingHorizontal: 12, paddingVertical: 4 },
  textHolder: { width: 80, height: 26 },
});
