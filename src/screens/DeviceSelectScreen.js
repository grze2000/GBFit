import React from 'react'
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { useEffect, useState } from 'react';

import DeviceSelectItem from '@components/DeviceSelectItem';
import colors from '@styles/colors';
import globalStyles from '@styles/styles';

export default function DeviceListScreen({ navigation }) {
  const [devices, setDevices] = useState([{
    id: '123456789',
    name: 'Test name',
    wheelSize: 26
  },
  {
    id: '1234563469',
    name: 'Test name 2',
    wheelSize: 26
  }])

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={devices}
        renderItem={({item}) => <DeviceSelectItem item={item} navigation={navigation} />}
        ListEmptyComponent={() => <Text style={globalStyles.emptyListMessage}>No devices</Text>}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={globalStyles.separator}></View>}
        contentContainerStyle={globalStyles.listContent}
      />
    </View>
  )
}
