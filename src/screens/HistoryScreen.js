import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '../components/Card';
import { Screen } from '../components/Screen';
import { colors, spacing, type } from '../designSystem';

const history = [
  { day: '28', month: 'Oct', title: 'Optimal Condition', moisture: '80%', strength: '72%', badge: '+2%' },
  { day: '21', month: 'Oct', title: 'Slightly Dry', moisture: '78%', strength: '68%', badge: '-4%' },
  { day: '14', month: 'Oct', title: 'Deep Hydration', moisture: '82%', strength: '70%', badge: '+12%' },
];

export const HistoryScreen = () => (
  <Screen>
    <Text style={styles.title}>Scan History</Text>
    <Card style={{ marginBottom: spacing.xl }}>
      <Text style={styles.chartTitle}>Health Trends</Text>
      <View style={styles.fakeChart}>
        {[45, 62, 38, 80, 64].map((h, idx) => <View key={idx} style={[styles.bar, { height: h }]} />)}
      </View>
    </Card>

    {history.map((item) => (
      <Card key={item.day} style={styles.historyCard}>
        <View style={styles.date}><Text style={styles.dateDay}>{item.day}</Text><Text style={styles.dateMonth}>{item.month}</Text></View>
        <View style={{ flex: 1 }}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemMeta}>Moisture {item.moisture} • Strength {item.strength}</Text>
        </View>
        <Text style={[styles.badge, { color: item.badge.startsWith('-') ? '#FF5D5D' : '#2BAE66' }]}>{item.badge}</Text>
      </Card>
    ))}
  </Screen>
);

const styles = StyleSheet.create({
  title: { ...type.h2, color: colors.textMain, marginBottom: spacing.xl },
  chartTitle: { ...type.h3, color: colors.textMain, marginBottom: spacing.lg },
  fakeChart: { height: 100, flexDirection: 'row', alignItems: 'flex-end', gap: spacing.sm },
  bar: { flex: 1, borderRadius: 10, backgroundColor: colors.accentOrangeLight },
  historyCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.md },
  date: { width: 52, height: 52, borderRadius: 16, backgroundColor: colors.bgApp, alignItems: 'center', justifyContent: 'center' },
  dateDay: { ...type.h3, color: colors.textMain },
  dateMonth: { ...type.caption, color: colors.textMuted },
  itemTitle: { ...type.body, fontWeight: '600', color: colors.textMain },
  itemMeta: { ...type.caption, color: colors.textMuted, marginTop: 2 },
  badge: { ...type.caption, fontWeight: '700' },
});
