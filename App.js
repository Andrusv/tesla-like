import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import styles from './styles'

import Header from './components/Header/index.js';
import CarList from './components/CarList/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Header />
      <CarList />

      <StatusBar style="auto" />
    </View>
  );
}
