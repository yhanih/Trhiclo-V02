import React, { useMemo, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { colors, elevation, radius, spacing, type } from '../designSystem';

const ICONS = {
  Home: '⌂',
  History: '◷',
  Shop: '◫',
  Routine: '✓',
  Profile: '◉',
};

export const BottomNav = ({ items, activeKey, onSelect, onFabPress }) => {
  const [expanded, setExpanded] = useState(false);
  const expand = useRef(new Animated.Value(0)).current;
  const plusRotate = useRef(new Animated.Value(0)).current;
  const panelHeight = useMemo(
    () =>
      expand.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 158],
      }),
    [expand],
  );

  const toggleExpanded = () => {
    const to = expanded ? 0 : 1;
    setExpanded(!expanded);
    Animated.parallel([
      Animated.spring(expand, { toValue: to, useNativeDriver: false, bounciness: 5, speed: 18 }),
      Animated.timing(plusRotate, { toValue: to, duration: 180, useNativeDriver: true }),
    ]).start();
  };

  const rotation = plusRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  return (
    <View style={styles.anchor}>
      <BlurView intensity={38} tint="light" style={styles.glassWrap}>
        <Animated.View style={[styles.expandedPanel, { height: panelHeight, opacity: expand }]}> 
          <Text style={styles.expandTitle}>Quick Actions</Text>
          <View style={styles.expandGrid}>
            {['Start Scan', 'New Routine', 'Save Look', 'Add Product'].map((action) => (
              <Pressable key={action} style={styles.actionPill} onPress={onFabPress}>
                <Text style={styles.actionText}>{action}</Text>
              </Pressable>
            ))}
          </View>
        </Animated.View>

        <View style={styles.row}>
          {items.slice(0, 4).map((item) => {
            const active = activeKey === item.key;
            return (
              <Pressable key={item.key} onPress={() => onSelect(item.key)} style={[styles.item, active && styles.active]}>
                <Text style={[styles.icon, active && styles.activeText]}>{ICONS[item.label] || '•'}</Text>
                <Text style={[styles.label, active && styles.activeText]}>{item.label}</Text>
              </Pressable>
            );
          })}
        </View>
      </BlurView>

      <Pressable onPress={toggleExpanded} style={styles.plusButtonContainer}>
        <BlurView intensity={60} tint="light" style={styles.plusGlass}>
          <Animated.Text style={[styles.plus, { transform: [{ rotate: rotation }] }]}>+</Animated.Text>
        </BlurView>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  anchor: {
    position: 'absolute',
    left: spacing.xl,
    right: spacing.xl,
    bottom: spacing.xl,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 14,
  },
  glassWrap: {
    flex: 1,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.62)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
    ...elevation.floating,
  },
  expandedPanel: {
    paddingHorizontal: spacing.lg,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  expandTitle: {
    ...type.caption,
    color: colors.textMuted,
    marginBottom: spacing.sm,
    letterSpacing: 0.3,
  },
  expandGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  actionPill: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  actionText: {
    ...type.caption,
    color: colors.textMain,
  },
  row: {
    minHeight: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: spacing.md,
  },
  item: {
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    opacity: 0.72,
  },
  active: { opacity: 1 },
  icon: { color: colors.textMuted, fontSize: 14 },
  label: { ...type.caption, color: colors.textMuted },
  activeText: { color: colors.accentOrange },
  plusButtonContainer: {
    marginRight: 8,
  },
  plusGlass: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.85)',
    backgroundColor: 'rgba(255,255,255,0.7)',
    ...elevation.floating,
  },
  plus: {
    fontSize: 30,
    lineHeight: 32,
    color: colors.textMain,
    fontWeight: '300',
  },
});
