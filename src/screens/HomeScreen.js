import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Screen } from '../components/Screen';
import { Card } from '../components/Card';
import { colors, radius, spacing, type } from '../designSystem';

const products = [
  { id: '1', name: 'Densifying Serum', category: 'Serums', price: '$39', img: 'https://images.unsplash.com/photo-1556228578-dd6a9a84a0f1?w=400' },
  { id: '2', name: 'Hydra Mask', category: 'Masks', price: '$29', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400' },
];

export const HomeScreen = ({ onOpenProduct, onOpenCamera }) => (
  <View style={{ flex: 1 }}>
    <Screen>
      <View style={styles.header}>
        <View style={styles.avatarRow}>
          <View style={styles.avatar} />
          <View>
            <Text style={styles.greet}>Welcome back</Text>
            <Text style={styles.name}>Alina Bhart</Text>
          </View>
        </View>
        <Pressable style={styles.iconBtn}><Text>⚙︎</Text></Pressable>
      </View>

      <Card dark style={styles.hero}>
        <Text style={styles.badge}>TODAY • HAIR MOISTURE</Text>
        <Text style={styles.heroTitle}>78%</Text>
        <Text style={styles.heroSub}>Optimal hydration range maintained.</Text>
      </Card>

      <View style={styles.miniGrid}>
        {['Hair Strength', 'Scalp Health', 'Split Ends'].map((x) => (
          <Card key={x} style={styles.miniCard}><Text style={styles.miniTitle}>{x}</Text><Text style={styles.miniValue}>Good</Text></Card>
        ))}
      </View>

      <View style={styles.sectionHead}><Text style={styles.sectionTitle}>For You</Text><Text style={styles.link}>See all</Text></View>
      {products.map((p) => (
        <Pressable key={p.id} onPress={() => onOpenProduct(p.id)} style={styles.product}>
          <Image source={{ uri: p.img }} style={styles.productImg} />
          <View style={{ flex: 1 }}>
            <Text style={styles.productName}>{p.name}</Text>
            <Text style={styles.productMeta}>{p.category}</Text>
            <Text style={styles.productPrice}>{p.price}</Text>
          </View>
          <Pressable style={styles.addBtn} onPress={onOpenCamera}><Text style={{ color: 'white' }}>+</Text></Pressable>
        </Pressable>
      ))}
    </Screen>
  </View>
);

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.xxl },
  avatarRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg },
  avatar: { width: 52, height: 52, borderRadius: 26, backgroundColor: '#D9D9D9' },
  greet: { ...type.caption, color: colors.textMuted },
  name: { ...type.h2, color: colors.textMain },
  iconBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.surfaceCard, alignItems: 'center', justifyContent: 'center' },
  hero: { marginBottom: spacing.xl },
  badge: { ...type.caption, color: '#CDD6E0', marginBottom: spacing.md },
  heroTitle: { fontSize: 44, fontWeight: '700', color: colors.textInverse },
  heroSub: { ...type.body, color: '#E1E5EB' },
  miniGrid: { gap: spacing.md, marginBottom: spacing.xl },
  miniCard: { borderRadius: radius.lg, padding: spacing.lg },
  miniTitle: { ...type.body, color: colors.textMuted },
  miniValue: { ...type.h3, color: colors.textMain, marginTop: spacing.xs },
  sectionHead: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.md, marginTop: spacing.sm },
  sectionTitle: { ...type.h3, color: colors.textMain },
  link: { ...type.caption, color: colors.accentOrange },
  product: { backgroundColor: colors.surfaceCard, borderRadius: radius.lg, padding: spacing.md, flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.md },
  productImg: { width: 64, height: 64, borderRadius: radius.md, backgroundColor: '#EEE' },
  productName: { ...type.body, fontWeight: '600', color: colors.textMain },
  productMeta: { ...type.caption, color: colors.textMuted },
  productPrice: { ...type.body, fontWeight: '700', marginTop: spacing.xs, color: colors.textMain },
  addBtn: { width: 34, height: 34, borderRadius: 17, backgroundColor: colors.accentOrange, alignItems: 'center', justifyContent: 'center' },
});
