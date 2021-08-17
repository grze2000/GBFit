import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '@styles/colors';

export default function DeviceListItem({ item }) {

  return (
    <View style={styles.container}>
      <Text>{item?.name}</Text>
      <Text style={styles.mac}>{item?.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  mac: {
    marginLeft: 'auto',
    color: colors.textGray
  }
});