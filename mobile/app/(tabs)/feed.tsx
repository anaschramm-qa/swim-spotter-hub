import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View, StyleSheet } from 'react-native';
import { colors } from '../../src/theme/colors';
import FeedCard, { type FeedItem } from '../../src/components/FeedCard';
import GradientText from '../../src/components/GradientText';
import GradientIcon from '../../src/components/GradientIcon';

const MOCK_FEED: FeedItem[] = [
  {
    id: '1',
    user: { name: 'Morning Swim', avatar: 'https://www.cob.org.br/_next/image?url=https%3A%2F%2Fadmin.cob.org.br%2Fuploads%2F3594_442deea838.webp&w=828&q=75' },
    title: 'Morning Swim',
    subtitle: '1000m • 30min',
    trophy: true,
    photoUrl:
      'https://ogimg.infoglobo.com.br/in/25139430-0bc-9d2/FT1086A/760/94576652_04082021Jogos-Olimpicos-Toquio-2020A-atleta-Ana-Marcela-Cunha-durante-a-prova-de-mara.jpg?posicaoFoto5',
    stats: {
      distance: '1000m',
      duration: '30min',
      calories: '200',
      avgHr: '150bpm',
      maxHr: '170bpm',
      pace: '3:00/100m',
    },
    likes: 20,
    comments: 5,
  },
];

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* TOP BAR integrada ao fundo */}
      <View style={styles.topBar}>
        <View style={styles.leftIcon}>
          <GradientIcon source={require('../../src/assets/crab.png')} size={45} />
        </View>

        <View pointerEvents="none" style={styles.centerTitle}>
          <GradientText style={styles.topTitle}>Feed</GradientText>
        </View>
      </View>

      <FlatList
        data={MOCK_FEED}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => <FeedCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.appBg },

  topBar: {
    height: 56,
    justifyContent: 'center',
    // não coloca backgroundColor aqui -> mantém linearidade
  },

  leftIcon: {
    position: 'absolute',
    left: 16,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },

  centerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topTitle: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
});
