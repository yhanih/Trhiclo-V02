import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { Card } from '../components/Card';
import { Screen } from '../components/Screen';
import { colors, spacing, type } from '../designSystem';

const rows = [
  ['Membership', 'Premium active'],
  ['Shipping Address', '221B Baker Street'],
  ['Support', 'Help Center'],
];

export const ProfileScreen = () => {
  const [notif, setNotif] = useState(true);
  return (
    <Screen>
      <View style={styles.center}>
        <View style={styles.avatar} />
        <Text style={styles.name}>Alina Bhart</Text>
        <Text style={styles.mail}>alina@trichlo.app</Text>
      </View>

      <Card style={styles.block}>
        {rows.map(([title, desc]) => (
          <Pressable key={title} style={styles.row}>
            <View><Text style={styles.rowTitle}>{title}</Text><Text style={styles.rowDesc}>{desc}</Text></View>
            <Text>›</Text>
          </Pressable>
        ))}
      </Card>

      <Card style={styles.block}>
        <View style={styles.row}><View><Text style={styles.rowTitle}>Push Notifications</Text><Text style={styles.rowDesc}>Routine and scan reminders</Text></View><Switch value={notif} onValueChange={setNotif} trackColor={{ true: colors.accentOrange }} /></View>
      </Card>
    </Screen>
  );
};

const styles = StyleSheet.create({
  center: { alignItems: 'center', marginBottom: spacing.xl },
  avatar: { width: 86, height: 86, borderRadius: 43, backgroundColor: '#D9D9D9', marginBottom: spacing.md },
  name: { ...type.h2, color: colors.textMain },
  mail: { ...type.body, color: colors.textMuted, marginTop: spacing.xs },
  block: { marginBottom: spacing.md, paddingVertical: spacing.sm },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: spacing.md },
  rowTitle: { ...type.body, color: colors.textMain, fontWeight: '600' },
  rowDesc: { ...type.caption, color: colors.textMuted },
});
