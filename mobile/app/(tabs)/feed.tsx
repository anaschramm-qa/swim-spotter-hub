import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { colors } from '../../src/theme/colors';
import FeedCard, { type FeedItem } from '../../src/components/FeedCard';
import GradientText from '../../src/components/GradientText';
import GradientIcon from '../../src/components/GradientIcon';
import { Image } from 'react-native'; // se precisar






const MOCK_FEED: FeedItem[] = [
    {
        id: '1',
        user: { name: 'Morning Swim', avatar: 'https://i.pravatar.cc/80?img=12' },
        title: 'Morning Swim',
        subtitle: '1000m • 30min',
        trophy: true,
        // use URL para evitar issues de require; troque por sua imagem quando quiser
        photoUrl:
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
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
            {/* TOP BAR COM GRADIENTE */}
            <View style={styles.topBar}>
                <GradientIcon source={require('../../src/assets/crab.png')} size={50} />
                <GradientText style={styles.topTitle}>Feed</GradientText>
                <View style={{ width: 28 }} />
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
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    topTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: '800',
        color: colors.ocean,
    }
});