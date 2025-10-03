import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  source: ImageSourcePropType;
  size?: number;
};

export default function GradientIcon({ source, size = 28 }: Props) {
  return (
    <MaskedView
      maskElement={
        <Image source={source} style={{ width: size, height: size }} resizeMode="contain" />
      }
    >
      <LinearGradient
        colors={['#0B7BB3', '#00CCC0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: size, height: size }}
      />
    </MaskedView>
  );
}
