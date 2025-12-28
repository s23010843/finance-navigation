import React, { useMemo, useState } from 'react';
import { Button } from '@react-navigation/elements';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import newspaper from '../../assets/newspaper.png';
import bell from '../../assets/bell.png';
import cover from '../../assets/cover.png';

export function Home() {
  const [query, setQuery] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const quickActions = [
    { id: '1', title: 'Feed', icon: newspaper },
    { id: '2', title: 'Updates', icon: bell },
    { id: '3', title: 'Profile', icon: bell },
  ];

  const feed = [
    { id: 'a', title: 'Market roundup', excerpt: 'Daily summary and important headlines', image: newspaper },
    { id: 'b', title: 'Investment tips', excerpt: 'Smart strategies for long-term growth', image: newspaper },
    { id: 'c', title: 'App update', excerpt: 'New features and fixes in this release', image: bell },
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return feed;
    return feed.filter(item => item.title.toLowerCase().includes(q) || item.excerpt.toLowerCase().includes(q));
  }, [query]);

  function renderAction({ item }: { item: any }) {
    return (
      <TouchableOpacity style={styles.actionCard}>
        <Image source={item.icon} style={styles.actionIcon} />
        <Text style={styles.actionText}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  function renderFeed({ item }: { item: any }) {
    return (
      <TouchableOpacity style={styles.feedCard}>
        <Image source={item.image} style={styles.feedImage} />
        <View style={{ flex: 1 }}>
          <Text style={styles.feedTitle}>{item.title}</Text>
          <Text style={styles.feedExcerpt}>{item.excerpt}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Finance Navigation</Text>
          <View style={styles.headerRight}>
            <Text style={styles.small}>Notifications</Text>
            <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
          </View>
        </View>

        <TextInput
          style={styles.search}
          placeholder="Search articles, tips..."
          value={query}
          onChangeText={setQuery}
        />

        <Image source={cover} style={styles.banner} />

        <Text style={styles.sectionTitle}>Quick actions</Text>
        <FlatList data={quickActions} horizontal showsHorizontalScrollIndicator={false} renderItem={renderAction} keyExtractor={i => i.id} style={{ marginBottom: 12 }} />

        <Text style={styles.sectionTitle}>Latest</Text>
        <FlatList data={filtered} renderItem={renderFeed} keyExtractor={i => i.id} scrollEnabled={false} />

        <View style={{ height: 24 }} />

        <Button screen="Profile" params={{ user: 'jane' }}>
          Go to Profile
        </Button>
        <View style={{ height: 8 }} />
        <Button screen="Settings">Open Settings</Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  title: { fontSize: 20, fontWeight: '700' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  small: { fontSize: 12, color: '#475569', marginRight: 8 },
  search: { height: 44, borderWidth: 1, borderColor: '#e6e9ef', borderRadius: 8, paddingHorizontal: 12, marginBottom: 12 },
  banner: { width: '100%', height: 140, borderRadius: 8, marginBottom: 12, resizeMode: 'cover' },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  actionCard: { width: 100, height: 100, backgroundColor: '#fff', borderRadius: 8, padding: 12, marginRight: 12, alignItems: 'center', justifyContent: 'center', boxShadow: '0px 6px 12px rgba(0,0,0,0.06)', elevation: 2 },
  actionIcon: { width: 36, height: 36, marginBottom: 8 },
  actionText: { fontSize: 13, fontWeight: '600' },
  feedCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 12, boxShadow: '0px 6px 12px rgba(0,0,0,0.04)', elevation: 1 },
  feedImage: { width: 64, height: 64, borderRadius: 8, marginRight: 12 },
  feedTitle: { fontSize: 15, fontWeight: '700' },
  feedExcerpt: { fontSize: 13, color: '#475569', marginTop: 4 },
});

export default Home;