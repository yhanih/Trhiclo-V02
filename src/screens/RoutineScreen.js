import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Card } from '../components/Card';
import { Screen } from '../components/Screen';
import { colors, spacing, type } from '../designSystem';

const baseSteps = [
  { id: '1', time: '08:00 AM', title: 'Cleanse & Prime', desc: 'Light scalp cleanse + serum prep.' },
  { id: '2', time: '01:00 PM', title: 'Mid-day Hydrate', desc: 'Mist roots and apply hydration veil.' },
  { id: '3', time: '09:00 PM', title: 'Night Recovery', desc: 'Overnight peptide treatment.' },
];

export const RoutineScreen = () => {
  const [done, setDone] = useState(['1']);
  const pct = useMemo(() => (done.length / baseSteps.length) * 100, [done]);

  return (
    <Screen>
      <Text style={styles.header}>AI Routine</Text>
      <Card dark style={styles.summary}>
        <Text style={styles.summaryBadge}>Daily Progress</Text>
        <Text style={styles.summaryBig}>{Math.round(pct)}%</Text>
        <Text style={styles.summaryCopy}>{done.length} of {baseSteps.length} steps completed.</Text>
      </Card>

      {baseSteps.map((s, index) => {
        const active = done.includes(s.id);
        return (
          <Pressable key={s.id} onPress={() => setDone((x) => (x.includes(s.id) ? x.filter((i) => i !== s.id) : [...x, s.id]))} style={[styles.step, active && styles.stepOn]}>
            <View style={[styles.dot, active && styles.dotOn]}><Text>{active ? '✓' : ''}</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.time}>{s.time}</Text>
              <Text style={styles.title}>{s.title}</Text>
              <Text style={styles.desc}>{s.desc}</Text>
            </View>
            <Text style={styles.idx}>0{index + 1}</Text>
          </Pressable>
        );
      })}
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: { ...type.h2, marginBottom: spacing.xl, color: colors.textMain },
  summary: { marginBottom: spacing.xl },
  summaryBadge: { ...type.caption, color: '#D5DCE5' },
  summaryBig: { fontSize: 48, fontWeight: '700', color: colors.textInverse, marginVertical: spacing.sm },
  summaryCopy: { ...type.body, color: '#E6ECF2' },
  step: { flexDirection: 'row', backgroundColor: colors.surfaceCard, borderRadius: 24, padding: spacing.lg, alignItems: 'center', gap: spacing.md, marginBottom: spacing.md },
  stepOn: { borderWidth: 1, borderColor: colors.accentOrangeLight },
  dot: { width: 26, height: 26, borderRadius: 13, borderWidth: 1, borderColor: '#D8DEE5', alignItems: 'center', justifyContent: 'center' },
  dotOn: { borderColor: colors.accentOrange, backgroundColor: colors.accentOrangeLight },
  time: { ...type.caption, color: colors.textMuted },
  title: { ...type.body, fontWeight: '600', color: colors.textMain },
  desc: { ...type.caption, color: colors.textMuted },
  idx: { ...type.caption, color: colors.textMuted },
});
