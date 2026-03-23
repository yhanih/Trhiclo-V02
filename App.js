import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppShell } from './src/navigation/AppShell';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AppShell />
    </>
  );
}

