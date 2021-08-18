import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import globalStyles from '@styles/styles';
import colors from '../styles/colors';

export default function HomeScreen() {
  const [selectedWeek, setSelectedWeek] = useState(4);

  return (
    <SafeAreaView  style={globalStyles.container}>
      <View style={styles.totalDistance}>
        <Text style={styles.totalDistanceText}>You have already covered</Text>
        <Text style={styles.totalDistanceValue}>57000 km</Text>
      </View>
      <View style={styles.col3Container}>
        <View style={styles.col3}>
          <Text style={styles.colValue}>4,35 km</Text>
          <Text style={styles.colText}>this week</Text>
        </View>
        <View style={styles.col3}>
          <Text style={styles.colValue}>1,35 km</Text>
          <Text style={styles.colText}>avg per day</Text>
        </View>
        <View style={styles.col3}>
          <Text style={styles.colValue}>32 min</Text>
          <Text style={styles.colText}>avg per day</Text>
        </View>
      </View>
      <View style={styles.separator}></View>
      <Text style={styles.title}>Weekly moves</Text>
      <View style={styles.weeks}>
        {['01.04', '08.04', '15.04', '22.04', '29.04'].map((week, index) =>
          <Pressable
            key={week}
            style={styles.week}
            onPress={() => setSelectedWeek(index)}
          >
            <Text style={[styles.weekText, index === selectedWeek ? styles.selected : null]}>{week}</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.col2Container}>
        <View style={globalStyles.column}>
          <Text style={globalStyles.infoTitle}>Distance</Text>
          <View style={globalStyles.valueBox}>
            <Text style={globalStyles.infoValue}>20,5</Text>
            <Text style={globalStyles.infoUnit}> km</Text>
          </View>
        </View>
        <View style={globalStyles.column}>
          <Text style={globalStyles.infoTitle}>Activity time</Text>
          <View style={globalStyles.valueBox}>
            <Text style={globalStyles.infoValue}>1</Text>
            <Text style={globalStyles.infoUnit}> h </Text>
            <Text style={globalStyles.infoValue}>43</Text>
            <Text style={globalStyles.infoUnit}> min</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
 
const styles = StyleSheet.create({
  totalDistance: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15
  },
  totalDistanceValue: {
    fontSize: 25,
    marginLeft: 10,
  },
  totalDistanceText: {
    fontSize: 16,
    color: colors.textGray
  },
  col3Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  col3: {
    width: '33%',
    alignItems: 'center'
  },
  colValue: {
    fontWeight: 'bold',
    fontSize: 17
  },
  colText: {
    color: colors.textGray
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center'
  },
  weeks: {
    flexDirection: 'row',
    marginVertical: 25
  },
  week: {
    width: '20%',
    alignItems: 'center',
  },
  weekText: {
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: colors.lightGray
  },
  selected: {
    borderBottomWidth: 3,
    borderBottomColor: colors.primary
  },
  col2Container: {
    flexDirection: 'row'
  }
});