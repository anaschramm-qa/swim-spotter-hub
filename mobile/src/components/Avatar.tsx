import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

type Props = { uri: string; size?: number };

export default function Avatar({ uri, size = 56 }: Props) {
  return (
    <View style={[styles.wrap, { width: size, height: size, borderRadius: size / 2 }]}>
      <Image source={{ uri }} style={{ width: '100%', height: '100%', borderRadius: size / 2 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { overflow: 'hidden', backgroundColor: '#DCE8F2' },
});
