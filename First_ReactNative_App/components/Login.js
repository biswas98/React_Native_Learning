import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style = {style.container}>
      <Text>Enter your name:  </Text>
      <TextInput 
        style = {style.input}
      />
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        
    },
    input: {
        margin: 4,
        padding: 5,
        width: 200,
        borderWidth: 1,
        borderColor: 'red'
    }
});