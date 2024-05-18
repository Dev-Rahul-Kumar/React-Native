import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Image, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text> Hello india</Text>
      
      <Image source={require('./assets/mona.jpg')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
