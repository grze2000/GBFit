import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import colors from '@styles/colors';

export default function DeviceListItem({ item, navigation }) {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Device info', { item })}
    >
      <Text>{item?.name}</Text>
      <Text style={styles.mac}>{item?.id}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  mac: {
    marginLeft: 'auto',
    color: colors.textGray
  }
});