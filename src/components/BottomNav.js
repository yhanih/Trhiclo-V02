import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, elevation, radius, spacing, type } from '../designSystem';

const ICONS = {
  Home: '⌂',
  History: '◷',
  Shop: '◫',
  Routine: '✓',
  Profile: '◉',
};

export const BottomNav = ({ items, activeKey, onSelect }) => (
  <View style={styles.wrap}>
    {items.map((item) => {
      const active = activeKey === item.key;
      return (
        <Pressable key={item.key} onPress={() => onSelect(item.key)} style={[styles.item, active && styles.active]}>
          <Text style={[styles.icon, active && styles.activeText]}>{ICONS[item.label] || '•'}</Text>
          <Text style={[styles.label, active && styles.activeText]}>{item.label}</Text>
        </Pressable>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: spacing.xl,
    right: spacing.xl,
    bottom: spacing.xl,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceCard,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: spacing.md,
    ...elevation.floating,
  },
  item: { alignItems: 'center', gap: 4, paddingHorizontal: 8, opacity: 0.65 },
  active: { opacity: 1 },
  icon: { color: colors.textMuted, fontSize: 14 },
  label: { ...type.caption, color: colors.textMuted },
  activeText: { color: colors.accentOrange },
});
