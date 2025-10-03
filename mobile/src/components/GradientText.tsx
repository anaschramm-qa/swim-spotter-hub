import React from 'react';
import { Text, TextProps, ColorValue } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

type Props = TextProps & {
  children: React.ReactNode;
  colors?: [ColorValue, ColorValue, ...ColorValue[]];
};

export default function GradientText({
  children,
  colors = ['#0B7BB3', '#00CCC0'] as [ColorValue, ColorValue],
  style,
  ...rest
}: Props) {
  return (
    <MaskedView maskElement={<Text {...rest} style={style}>{children}</Text>}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* texto “invisível” só para dar tamanho ao gradient */}
        <Text {...rest} style={[style, { opacity: 0 }]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
}
