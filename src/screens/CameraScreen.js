import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../designSystem';

export const CameraScreen = ({ onCapture, onClose }) => (
  <View style={styles.root}>
    <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1595475241949-0d05be16556c?w=900' }} style={styles.bg}>
      <View style={styles.overlay}>
        <Pressable onPress={onClose} style={styles.topBtn}><Text style={{ color: 'white' }}>✕</Text></Pressable>
        <View style={styles.frame} />
        <View style={styles.controls}>
          <Text style={styles.zoom}>0.5x   1x   2x</Text>
          <Pressable onPress={onCapture} style={styles.shutter}><View style={styles.shutterInner} /></Pressable>
        </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#000' },
  bg: { flex: 1 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'space-between', paddingTop: 56, paddingBottom: 48, paddingHorizontal: 24 },
  topBtn: { alignSelf: 'flex-end', width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(255,255,255,0.15)', alignItems: 'center', justifyContent: 'center' },
  frame: { alignSelf: 'center', width: 280, height: 380, borderRadius: 32, borderWidth: 2, borderColor: 'rgba(255,255,255,0.55)' },
  controls: { alignItems: 'center', gap: 16 },
  zoom: { color: '#D7DBE0', letterSpacing: 1 },
  shutter: { width: 80, height: 80, borderRadius: 40, borderWidth: 4, borderColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  shutterInner: { width: 64, height: 64, borderRadius: 32, backgroundColor: colors.accentOrange },
});
