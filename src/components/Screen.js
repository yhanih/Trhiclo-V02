import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { colors, layout } from '../designSystem';

export const Screen = ({ children, padded = true, dark = false }) => (
  <ScrollView
    style={[styles.root, { backgroundColor: dark ? colors.black : colors.bgApp }]}
    contentContainerStyle={[
      styles.content,
      padded && {
        paddingHorizontal: layout.screenPadding,
        paddingTop: layout.topInset,
        paddingBottom: layout.bottomInset,
      },
    ]}
    showsVerticalScrollIndicator={false}
  >
    <View>{children}</View>
  </ScrollView>
);

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: { minHeight: '100%' },
});
