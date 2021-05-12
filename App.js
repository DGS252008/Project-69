import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Scanner from './screens/scanScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Barcode Scanner for Grocery Store.</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#224852',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
