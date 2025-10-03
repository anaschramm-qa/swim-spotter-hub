import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../theme/colors';
import Avatar from './Avatar';
import StatRow from './StatRow';
import { Ionicons } from '@expo/vector-icons';

export type FeedStats = {
  distance: string;
  duration: string;
  calories: string;
  avgHr: string;
  maxHr: string;
  pace: string;
};

export type FeedItem = {
  id: string;
  user: { name: string; avatar: string };
  title: string;
  subtitle: string;
  trophy?: boolean;
  photoUrl: string;
  stats: FeedStats;
  likes: number;
  comments: number;
};

type Props = { item: FeedItem };

export default function FeedCard({ item }: Props) {
  const s = item.stats;

  return (
    <View style={styles.card}>
      {/* header */}
      <View style={styles.headerRow}>
        <Avatar uri={item.user.avatar} size={56} />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.title}>{item.title}</Text>
            {item.trophy && (
              <Ionicons name="trophy" size={18} color={colors.aqua} style={{ marginLeft: 6 }} />
            )}
          </View>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>

      {/* foto */}
      <Image source={{ uri: item.photoUrl }} style={styles.photo} resizeMode="cover" />

      {/* métricas */}
      <View style={styles.metrics}>
        <View style={styles.gridRow}>
          <StatRow icon="distance" label="Distance" value={s.distance} />
          <StatRow icon="duration" label="Duration" value={s.duration} />
        </View>
        <View style={styles.gridRow}>
          <StatRow icon="calories" label="Calories" value={s.calories} />
          <StatRow icon="pace" label="Pace" value={s.pace} />

        </View>
        <View style={styles.gridRow}>
          <StatRow icon="avgHr" label="Avg HR" value={s.avgHr} />
          <StatRow icon="maxHr" label="Max HR" value={s.maxHr} />
          
        </View>
      </View>

      {/* ações */}
      <View style={styles.footer}>
        <View style={styles.action}>
          <Ionicons name="heart-outline" size={22} color={colors.subtext} />
          <Text style={styles.actionText}>{item.likes}</Text>
        </View>
        <View style={styles.action}>
          <Ionicons name="chatbubble-ellipses-outline" size={22} color={colors.subtext} />
          <Text style={styles.actionText}>{item.comments}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  headerRow: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  title: { fontSize: 18, fontWeight: '900', color: colors.text },
  subtitle: { fontSize: 14, color: colors.subtext, marginTop: 2 },
  photo: { width: '100%', height: 240, backgroundColor: '#d9e6f2' },
  metrics: { padding: 16, gap: 12 },
  gridRow: { flexDirection: 'row', gap: 12 },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    flexDirection: 'row',
    gap: 20,
  },
  action: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  actionText: { color: colors.subtext, fontWeight: '700' },
});
