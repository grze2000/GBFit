import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import DeviceListScreen from '@screens/DeviceListScreen';
import DeviceSelectScreen from '@screens/DeviceSelectScreen';
import DeviceInfoScreen from '@screens/DeviceInfoScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My devices" component={DeviceListScreen} />
      <Stack.Screen name="Add device" component={DeviceSelectScreen} />
      <Stack.Screen name="Device info" component={DeviceInfoScreen} />
    </Stack.Navigator>
  )
}
