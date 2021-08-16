import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 

import StackNavigator from '@navigators/StackNavigator';
import HomeScreen from '@screens/HomeScreen';
import ActivityScreen from '@screens/ActivityScreen';

const Tab = createBottomTabNavigator();

const tabIcons = {
  'Home': 'home',
  'Activity': 'speed',
  'Devices': 'directions-bike'
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return <MaterialIcons name={tabIcons[route.name]} size={size} color={color} />
        },
        headerShown: false
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Devices" component={StackNavigator} />
    </Tab.Navigator>
  )
}
