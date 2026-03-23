import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, spacing, type } from '../designSystem';

export const ScanResultScreen = ({ scanning, complete, onScan, onClose }) => (
  <View style={styles.root}>
    <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1595085610729-f19eec8f515d?w=900' }} style={styles.bg}>
      <View style={styles.dim} />
      <View style={styles.topBar}>
        <Text style={styles.live}>{scanning ? 'SCANNING...' : complete ? 'SCAN COMPLETE' : 'LIVE SCAN'}</Text>
        <Pressable onPress={onClose} style={styles.dotBtn}><Text style={{ color: 'white' }}>⋮</Text></Pressable>
      </View>
      <View style={styles.frame} />
      <View style={styles.bottomCard}>
        <Text style={styles.title}>Hair Analysis</Text>
        <Text style={styles.sub}>Moisture balance and strand resilience are in good range.</Text>
        <Pressable style={styles.cta} onPress={onScan}><Text style={styles.ctaText}>{complete ? 'Scan Again' : 'Initiate Scan'}</Text></Pressable>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.black },
  bg: { flex: 1, justifyContent: 'space-between' },
  dim: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.45)' },
  topBar: { marginTop: 56, marginHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  live: { color: colors.accentLime, ...type.caption, letterSpacing: 1.8 },
  dotBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.12)', alignItems: 'center', justifyContent: 'center' },
  frame: { alignSelf: 'center', marginTop: 40, width: 280, height: 280, borderRadius: 28, borderWidth: 2, borderColor: 'rgba(255,255,255,0.4)' },
  bottomCard: { margin: spacing.xl, borderRadius: 28, backgroundColor: 'rgba(20,20,20,0.88)', padding: spacing.xl },
  title: { color: '#fff', ...type.h2, marginBottom: spacing.sm },
  sub: { color: '#E2E4E7', ...type.body, marginBottom: spacing.lg },
  cta: { backgroundColor: colors.accentLime, borderRadius: 16, paddingVertical: 14, alignItems: 'center' },
  ctaText: { color: colors.black, fontWeight: '700' },
});
