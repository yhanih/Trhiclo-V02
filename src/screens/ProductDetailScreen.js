import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, type } from '../designSystem';

export const ProductDetailScreen = ({ onBack }) => {
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1556228578-dd6a9a84a0f1?w=900' }} style={styles.hero} />
        <View style={styles.headerBtns}>
          <Pressable onPress={onBack} style={styles.icon}><Text>‹</Text></Pressable>
          <Pressable onPress={() => setLiked((x) => !x)} style={styles.icon}><Text>{liked ? '♥' : '♡'}</Text></Pressable>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>Densifying Serum</Text>
          <Text style={styles.price}>$39</Text>
          <Text style={styles.desc}>A lightweight treatment designed to improve scalp density, reduce breakage, and hydrate roots.</Text>

          <Text style={styles.section}>Real Results</Text>
          <View style={styles.resultRow}>
            <View style={styles.metric}><Text style={styles.metricNum}>+18%</Text><Text style={styles.metricLab}>Density</Text></View>
            <View style={styles.metric}><Text style={styles.metricNum}>-24%</Text><Text style={styles.metricLab}>Breakage</Text></View>
            <View style={styles.metric}><Text style={styles.metricNum}>+13%</Text><Text style={styles.metricLab}>Hydration</Text></View>
          </View>

          <Pressable style={styles.buyBtn}><Text style={{ color: 'white', fontWeight: '700' }}>Add to Cart</Text></Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bgApp },
  hero: { width: '100%', height: 360 },
  headerBtns: { position: 'absolute', top: 56, left: 24, right: 24, flexDirection: 'row', justifyContent: 'space-between' },
  icon: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(255,255,255,0.86)', alignItems: 'center', justifyContent: 'center' },
  body: { marginTop: -26, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: colors.bgApp, padding: spacing.xl },
  title: { ...type.h1, color: colors.textMain },
  price: { ...type.h2, color: colors.accentOrange, marginTop: spacing.sm },
  desc: { ...type.body, color: colors.textMuted, lineHeight: 20, marginTop: spacing.md },
  section: { ...type.h3, marginTop: spacing.xl, marginBottom: spacing.md },
  resultRow: { flexDirection: 'row', gap: spacing.sm },
  metric: { flex: 1, backgroundColor: colors.surfaceCard, borderRadius: radius.lg, alignItems: 'center', paddingVertical: spacing.lg },
  metricNum: { ...type.h3, color: colors.textMain },
  metricLab: { ...type.caption, color: colors.textMuted },
  buyBtn: { marginTop: spacing.xl, borderRadius: radius.lg, backgroundColor: colors.surfaceDark, alignItems: 'center', paddingVertical: 16 },
});
