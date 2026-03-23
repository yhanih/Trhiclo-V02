import React, { useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { BottomNav } from './src/components/BottomNav';
import { FloatingActionButton } from './src/components/FloatingActionButton';
import { CameraScreen } from './src/screens/CameraScreen';
import { HistoryScreen } from './src/screens/HistoryScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ProductDetailScreen } from './src/screens/ProductDetailScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { RoutineScreen } from './src/screens/RoutineScreen';
import { ScanResultScreen } from './src/screens/ScanResultScreen';
import { ShopScreen } from './src/screens/ShopScreen';

const tabs = [
  { key: 'home', label: 'Home' },
  { key: 'history', label: 'History' },
  { key: 'shop', label: 'Shop' },
  { key: 'routine', label: 'Routine' },
  { key: 'profile', label: 'Profile' },
];

export default function App() {
  const [tab, setTab] = useState('home');
  const [overlay, setOverlay] = useState(null); // camera | scanResult | product
  const [scanState, setScanState] = useState({ scanning: false, complete: false });

  const current = useMemo(() => {
    if (overlay === 'camera') {
      return <CameraScreen onCapture={() => setOverlay('scanResult')} onClose={() => setOverlay(null)} />;
    }
    if (overlay === 'scanResult') {
      return (
        <ScanResultScreen
          scanning={scanState.scanning}
          complete={scanState.complete}
          onClose={() => setOverlay(null)}
          onScan={() => {
            if (scanState.complete) {
              setScanState({ scanning: false, complete: false });
              return;
            }
            setScanState({ scanning: true, complete: false });
            setTimeout(() => setScanState({ scanning: false, complete: true }), 2500);
          }}
        />
      );
    }
    if (overlay === 'product') {
      return <ProductDetailScreen onBack={() => setOverlay(null)} />;
    }

    switch (tab) {
      case 'history':
        return <HistoryScreen />;
      case 'shop':
        return <ShopScreen onOpenProduct={() => setOverlay('product')} />;
      case 'routine':
        return <RoutineScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen onOpenProduct={() => setOverlay('product')} onOpenCamera={() => setOverlay('camera')} />;
    }
  }, [overlay, tab, scanState]);

  const showTabs = !overlay;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>{current}</View>
      {showTabs && <BottomNav items={tabs} activeKey={tab} onSelect={setTab} />}
      {showTabs && <FloatingActionButton onPress={() => setOverlay('camera')} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  root: { flex: 1 },
});
