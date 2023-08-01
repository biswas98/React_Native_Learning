import { View, Text } from 'react-native'
import React , { useState } from 'react'

export default function touchMe() {
  let count = 0;
  const [curr, change] = useState(count);
  const press = () => change => count+1;
  return (

    <View>
      <Text>{curr}</Text>
      
    </View>
  )
}
// Learning about States and Buttons.