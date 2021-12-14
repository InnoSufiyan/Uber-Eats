import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './views/Home';

export default function App() {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
}
