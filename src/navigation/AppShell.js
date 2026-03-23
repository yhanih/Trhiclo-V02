import React, { useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { BottomNav } from '../components/BottomNav';
import { navConfig } from '../theme/tokens';
import { CameraScreen } from '../screens/CameraScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ProductDetailScreen } from '../screens/ProductDetailScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { RoutineScreen } from '../screens/RoutineScreen';
import { ScanResultScreen } from '../screens/ScanResultScreen';
import { ShopScreen } from '../screens/ShopScreen';

export const AppShell = () => {
  const [tab, setTab] = useState('home');
  const [overlay, setOverlay] = useState(null);
  const [scanState, setScanState] = useState({ scanning: false, complete: false });

  const current = useMemo(() => {
    if (overlay === 'camera') return <CameraScreen onCapture={() => setOverlay('scanResult')} onClose={() => setOverlay(null)} />;
    if (overlay === 'scanResult') {
      return (
        <ScanResultScreen
          scanning={scanState.scanning}
          complete={scanState.complete}
          onClose={() => setOverlay(null)}
          onScan={() => {
            if (scanState.complete) return setScanState({ scanning: false, complete: false });
            setScanState({ scanning: true, complete: false });
            setTimeout(() => setScanState({ scanning: false, complete: true }), 2500);
          }}
        />
      );
    }
    if (overlay === 'product') return <ProductDetailScreen onBack={() => setOverlay(null)} />;

    if (tab === 'history') return <HistoryScreen />;
    if (tab === 'shop') return <ShopScreen onOpenProduct={() => setOverlay('product')} />;
    if (tab === 'routine') return <RoutineScreen />;
    if (tab === 'profile') return <ProfileScreen />;
    return <HomeScreen onOpenProduct={() => setOverlay('product')} onOpenCamera={() => setOverlay('camera')} />;
  }, [overlay, tab, scanState]);

  const showChrome = !overlay;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>{current}</View>
      {showChrome && <BottomNav items={navConfig.items} activeKey={tab} onSelect={setTab} onFabPress={() => setOverlay('camera')} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1 },
  root: { flex: 1 },
});
