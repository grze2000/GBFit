import React from 'react'
import { FlatList, StyleSheet, Text, ToastAndroid, TouchableHighlight, View } from 'react-native'
import { useEffect, useState } from 'react';
import { useContext } from 'react';

import DeviceSelectItem from '@components/DeviceSelectItem';
import globalStyles from '@styles/styles';
import BLEContext from '@contexts/BLEContext';
import { useIsFocused } from '@react-navigation/native';

export default function DeviceListScreen({ navigation }) {
  const { state, dispatch } = useContext(BLEContext);
  const [isScanning, setIsScanning] = useState(true);
  const isFocused = useIsFocused();
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    if(state.manager && isFocused) {
      console.log('start scan');
      setIsScanning(true);
      state.manager.startDeviceScan(['0000ffe0-0000-1000-8000-00805f9b34fb'], {allowDuplicates: false}, (error, device) => {
        if(error) {
          console.log(error);
          ToastAndroid.show('Error occurred during the scan', ToastAndroid.SHORT);
          setIsScanning(false);
          return;
        }

        if(devices.every(x => x.id !== device.id)) {
          console.log('add device');
          setDevices([...devices, {
            id: device.id,
            name: device.name
          }]);
        }
      })
    } 

    return () => {
      if(state.manager) {
        console.log('stop scan');
        state.manager.stopDeviceScan();
        setIsScanning(false);
      }
    }
  }, [isFocused, devices])

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={devices}
        renderItem={({item}) => <DeviceSelectItem item={item} navigation={navigation} />}
        ListEmptyComponent={() => <Text style={globalStyles.emptyListMessage}>{ isScanning ? 'Scanning...' : 'No devices' }</Text>}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={globalStyles.separator}></View>}
        contentContainerStyle={globalStyles.listContent}
        refreshing={isScanning}
      />
    </View>
  )
}
