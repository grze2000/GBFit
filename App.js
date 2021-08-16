import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons'; 

import DeviceListScreen from './src/screens/DeviceListScreen';
import HomeScreen from './src/screens/HomeScreen';
import ActivityScreen from './src/screens/ActivityScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false, tabBarIcon: () => (<MaterialIcons name="home" size={24} color="black" />)}} />
          <Tab.Screen name="Activity" component={ActivityScreen} options={{headerShown: false, tabBarIcon: () => (<MaterialIcons name="speed" size={24} color="black" />)}} />
          <Tab.Screen name="Devices" component={DeviceListScreen} options={{headerShown: false, tabBarIcon: () => (<MaterialIcons name="directions-bike" size={24} color="black" />)}} />
        </Tab.Navigator>
      </NavigationContainer>
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
