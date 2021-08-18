import React from 'react'
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import DeviceListItem from '@components/DeviceListItem';
import colors from '@styles/colors';
import globalStyles from '@styles/styles';

export default function DeviceListScreen({ navigation }) {
  const [devices, setDevices] = useState([{
    id: '123456789',
    name: 'Test name',
    wheelSize: 26,
    connected: false
  },
  {
    id: '1234563469',
    name: 'Test name 2',
    wheelSize: 26,
    connected: true
  }])

  // useEffect(() => {
  //   AsyncStorage.getItem('@devices').then(data => {
  //     if(data) {
  //       setDevices(data)
  //     }
  //   })
  // }, [])

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={devices}
        renderItem={({item}) => <DeviceListItem item={item} />}
        ListEmptyComponent={() => <Text style={globalStyles.emptyListMessage}>No devices</Text>}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={globalStyles.separator}></View>}
        contentContainerStyle={globalStyles.listContent}
      />
      <TouchableHighlight
        style={globalStyles.button}
        onPress={() => navigation.navigate('Select device')}
        underlayColor={colors.hover}
      >
        <Text style={globalStyles.buttonText}>Add device</Text>
      </TouchableHighlight>
    </View>
  )
}