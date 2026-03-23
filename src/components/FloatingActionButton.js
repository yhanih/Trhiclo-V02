import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, elevation } from '../designSystem';

export const FloatingActionButton = ({ onPress }) => (
  <Pressable onPress={onPress} style={styles.fab}>
    <Text style={styles.plus}>+</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 32,
    bottom: 108,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.accentOrange,
    justifyContent: 'center',
    alignItems: 'center',
    ...elevation.floating,
  },
  plus: { color: colors.textInverse, fontSize: 30, lineHeight: 32, fontWeight: '300' },
});
