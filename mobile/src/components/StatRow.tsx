import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

type IconKey = 'distance' | 'duration' | 'calories' | 'avgHr' | 'maxHr' | 'pace';

const ICONS: Record<IconKey, (c: string, s: number) => JSX.Element> = {
  distance: (c, s) => <MaterialCommunityIcons name="ruler-square" size={s} color={c} />,
  duration: (c, s) => <Ionicons name="timer-outline" size={s} color={c} />,
  calories: (c, s) => <Ionicons name="flame-outline" size={s} color={c} />,
  avgHr:    (c, s) => <MaterialCommunityIcons name="heart-pulse" size={s} color={c} />,
  maxHr:    (c, s) => <MaterialCommunityIcons name="flash-outline" size={s} color={c} />,
  pace:     (c, s) => <MaterialCommunityIcons name="swim" size={s} color={c} />,
};

type Props = { label: string; value: string; icon: IconKey };

export default function StatRow({ label, value, icon }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.icon}>{ICONS[icon](colors.ocean, 22)}</View>
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', flex: 1, minWidth: '45%' },
  icon: { width: 28, alignItems: 'center', marginRight: 8 },
  label: { color: colors.subtext, fontSize: 14, fontWeight: '600' },
  value: { color: colors.text, fontSize: 18, fontWeight: '800', marginTop: 2 },
});
