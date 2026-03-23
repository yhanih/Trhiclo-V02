import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, elevation, radius, spacing } from '../designSystem';

export const Card = ({ children, dark = false, style }) => (
  <View style={[styles.base, dark ? styles.dark : styles.light, style]}>{children}</View>
);

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.xl,
    padding: spacing.xl,
  },
  light: {
    backgroundColor: colors.surfaceCard,
    ...elevation.card,
  },
  dark: {
    backgroundColor: colors.surfaceDark,
  },
});
