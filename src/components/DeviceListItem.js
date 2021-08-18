import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '@styles/colors';

export default function DeviceListItem({ item }) {

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item?.name}</Text>
      <View style={styles.details}>
        <Text style={styles.mac}>{item?.id}</Text>
        { item?.connected ?
          <View style={styles.status}>
            <MaterialCommunityIcons name="bluetooth" size={12} color={colors.success} />
            <Text style={[styles.statusText, {color: colors.success}]}>Connected</Text>
          </View>
            :
          <View style={styles.status}>
            <MaterialCommunityIcons name="bluetooth-off" size={12} color={colors.warning} />
            <Text style={[styles.statusText, {color: colors.warning}]}>Disconnected</Text>
          </View>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontSize: 16
  },
  mac: {
    color: colors.textGray
  },
  details: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  statusText: {
    fontSize: 12
  }
});