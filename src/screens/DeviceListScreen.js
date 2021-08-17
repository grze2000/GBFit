import React from 'react'
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import DeviceListItem from '@components/DeviceListItem';
import colors from '@styles/colors';

export default function DeviceListScreen({ navigation }) {
  const [devices, setDevices] = useState([])

  // useEffect(() => {
  //   AsyncStorage.getItem('@devices').then(data => {
  //     if(data) {
  //       setDevices(data)
  //     }
  //   })
  // }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={devices}
        renderItem={({item}) => <DeviceListItem item={item} />}
        ListEmptyComponent={() => <Text style={styles.emptyListMessage}>No devices</Text>}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        contentContainerStyle={styles.listContent}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('Add device')}
        underlayColor={colors.hover}
      >
        <Text style={styles.buttonText}>Add device</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    marginVertical: 3
  },
  listContent: {
    padding: 6,
    alignItems: 'center'
  },
  button: {
    marginTop: 'auto',
    borderRadius: 10,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 15,
    elevation: 3
  },
  buttonText: {
    color: colors.textLight,
  },
  emptyListMessage: {
    marginTop: 15,
    color: colors.textGray,
    fontSize: 16
  }
})