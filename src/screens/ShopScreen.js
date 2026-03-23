import React, { useMemo, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Screen } from '../components/Screen';
import { colors, radius, spacing, type } from '../designSystem';

const data = [
  { id: '1', name: 'Densifying Serum', brand: 'Trichlo', category: 'Serums', price: '$39', img: 'https://images.unsplash.com/photo-1556228578-dd6a9a84a0f1?w=400' },
  { id: '2', name: 'Nourish Hair Oil', brand: 'Trichlo', category: 'Oils', price: '$24', img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400' },
  { id: '3', name: 'Hydra Mask', brand: 'Trichlo', category: 'Masks', price: '$29', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400' },
];

export const ShopScreen = ({ onOpenProduct }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All Products');
  const cats = ['All Products', 'Serums', 'Masks', 'Oils'];

  const filtered = useMemo(
    () => data.filter((d) => (category === 'All Products' || d.category === category) && d.name.toLowerCase().includes(query.toLowerCase())),
    [query, category],
  );

  return (
    <Screen>
      <View style={styles.searchRow}>
        <View style={styles.searchBar}><Text>⌕</Text><TextInput value={query} onChangeText={setQuery} style={styles.input} placeholder="Search" /></View>
        <Pressable style={styles.filterBtn}><Text style={{ color: 'white' }}>☰</Text></Pressable>
      </View>

      <View style={styles.cats}>
        {cats.map((c) => (
          <Pressable key={c} onPress={() => setCategory(c)} style={[styles.catPill, category === c && styles.catPillActive]}>
            <Text style={[styles.catText, category === c && styles.catTextActive]}>{c}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.grid}>
        {filtered.map((p) => (
          <Pressable key={p.id} onPress={() => onOpenProduct(p.id)} style={styles.card}>
            <Image source={{ uri: p.img }} style={styles.img} />
            <Text style={styles.name}>{p.name}</Text>
            <Text style={styles.brand}>{p.brand}</Text>
            <View style={styles.bottom}><Text style={styles.price}>{p.price}</Text><Text style={styles.plus}>+</Text></View>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  searchRow: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.lg },
  searchBar: { flex: 1, borderRadius: radius.pill, backgroundColor: colors.surfaceCard, paddingHorizontal: spacing.lg, height: 46, alignItems: 'center', flexDirection: 'row', gap: spacing.sm },
  input: { flex: 1 },
  filterBtn: { width: 46, height: 46, borderRadius: radius.md, backgroundColor: colors.surfaceDark, alignItems: 'center', justifyContent: 'center' },
  cats: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg, flexWrap: 'wrap' },
  catPill: { borderRadius: radius.pill, backgroundColor: colors.surfaceCard, paddingHorizontal: spacing.lg, paddingVertical: spacing.sm },
  catPillActive: { backgroundColor: colors.accentOrange },
  catText: { ...type.caption, color: colors.textMain },
  catTextActive: { color: colors.textInverse },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  card: { width: '48%', backgroundColor: colors.surfaceCard, borderRadius: radius.lg, padding: spacing.md },
  img: { width: '100%', height: 120, borderRadius: radius.md, marginBottom: spacing.sm },
  name: { ...type.body, fontWeight: '600', color: colors.textMain },
  brand: { ...type.caption, color: colors.textMuted, marginBottom: spacing.sm },
  bottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { ...type.body, fontWeight: '700' },
  plus: { color: colors.accentOrange, fontSize: 22, lineHeight: 22 },
});
