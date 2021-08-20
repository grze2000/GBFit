import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import TabNavigator from '@navigators/TabNavigator';
import { BLEContextProvider } from '@contexts/BLEContext';

export default function App() {

  return (
    <SafeAreaProvider>
      <BLEContextProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </BLEContextProvider>
    </SafeAreaProvider>
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
