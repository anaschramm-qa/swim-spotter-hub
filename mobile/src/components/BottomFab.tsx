import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { useRouter } from 'expo-router';

export default function BottomFab() {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push('../../(tabs)/create')}
      style={({ pressed }) => [styles.fab, pressed && { opacity: 0.85 }]}
      android_ripple={{ color: '#E0F7F6', borderless: true }}
    >
      <AntDesign name="plus" size={28} color="#fff" />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  fab: {
    width: 64,
    height: 64,
    borderRadius: 999,
    backgroundColor: colors.aqua,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
});
