import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Line, Text as SvgText } from 'react-native-svg';

const texts = [
  {
    text: 'km/h',
    x: 50,
    y: 58
  },
  {
    text: '50',
    x: 50,
    y: 15
  }
]

export default function DeviceListScreen() {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Text>3,85</Text>
          <Text>Km</Text>
        </View>
        <Text>10 hr 8 min</Text>
      </View>
      <View>
        <Svg width="100%" height="80%" viewBox="0 0 100 100">
        <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="silver"
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
            stroke="blue"
            strokeWidth="5"
            fill="none"
            strokeDasharray="90, 283"
            rotation="135"
            origin="50, 50"
          />
          <Line
            x1="50"
            y1="3"
            x2="50"
            y2="30"
            stroke="red" 
            strokeWidth="1"
            origin="50, 50"
            rotation="-20"
          />
          <SvgText
            fill="black"
            stroke="none"
            fontSize="20"
            fontWeight="bold"
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
            fontWeight="bold"
            x={text.x}
            y={text.y}
            textAnchor="middle"
            key={`${text.x},${text.y}`}
          >
            {text.text}
          </SvgText>
          )}
        </Svg>
      </View>
    </SafeAreaView>
  )
}
