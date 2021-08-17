import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Defs, Line, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';

import colors from '@styles/colors';
import globalStyles from '@styles/styles';

const texts = [
  { text: 'km/h', x: 50, y: 58 },
  { text: '0', x: 25, y: 77 },
  { text: '10', x: 15, y: 58 },
  { text: '20', x: 17, y: 38 },
  { text: '30', x: 30, y: 21 },
  { text: '40', x: 50, y: 15 },
  { text: '50', x: 70, y: 21 },
  { text: '60', x: 83, y: 38 },
  { text: '70', x: 85, y: 58 },
  { text: '80', x: 75, y: 77 },
  { text: 'Total Distance', x: 50, y: 80 }
]

const speed = 35

export default function DeviceListScreen() {
  return (
    <SafeAreaView>
      <View style={styles.routeInfo}>
        <View style={styles.routeDistanceContainer}>
          <Text style={styles.routeDistance}>3,85</Text>
          <Text style={styles.routeDistanceUnit}>km</Text>
        </View>
        <View style={styles.timeInfo}>
          <Text style={styles.timeInfoVal}>10</Text>
          <Text style={styles.timeInfoUnit}> hr </Text>
          <Text style={styles.timeInfoVal}>8</Text>
          <Text style={styles.timeInfoUnit}> min</Text>
        </View>
      </View>
      <View>
        <Svg width="100%" height="80%" viewBox="0 0 100 100">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor={colors.primary} stopOpacity="1" />
            <Stop offset="1" stopColor={colors.secondary} stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Circle
            cx="50"
            cy="50"
            r="45"
            stroke={colors.lightGray}
            strokeWidth="5"
            fill="none"
            strokeDasharray="212, 283"
            rotation="135"
            origin="50, 50"
          />
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#grad)"
            strokeWidth="5"
            fill="none"
            strokeDasharray={`${speed*212/80}, 283`}
            rotation="135"
            origin="50, 50"
          />
          <SvgText
            fill="black"
            stroke="none"
            fontSize="20"
            x="50"
            y="50"
            textAnchor="middle"
          >
            23
          </SvgText>
          {texts.map(text => 
            <SvgText
            fill="silver"
            stroke="none"
            fontSize="4"
            x={text.x}
            y={text.y}
            textAnchor="middle"
            key={`${text.x},${text.y}`}
          >
            {text.text}
          </SvgText>
          )}
          <SvgText
            fill={colors.textDark}
            stroke="none"
            fontSize="4"
            x="50"
            y="86"
            textAnchor="middle"
          >
            57000 km
          </SvgText>
          <Line
            x1="50"
            y1="3"
            x2="50"
            y2="30"
            stroke={colors.primary} 
            strokeWidth="1"
            origin="50, 50"
            rotation={-135+(speed*270/80)}
          />
        </Svg>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  routeDistanceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 10
  },
  routeDistance: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  routeDistanceUnit: {
    fontSize: 25,
    color: colors.textGray,
    marginLeft: 10,
    marginBottom: 10
  },
  routeInfo: {
    paddingHorizontal: 40
  },
  timeInfo: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  timeInfoVal: {
    fontWeight: 'bold',
    fontSize: 30
  },
  timeInfoUnit: {
    fontSize: 25,
  }
})