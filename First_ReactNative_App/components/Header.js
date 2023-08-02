import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function () {
  return (
    <View style={logoStyle.container}>
        <Image source={require('../resources/logo.png')} style={logoStyle.logoRes}/>
        <Text>Enter your details</Text>
    </View>
  )
}

const logoStyle = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    logoRes: {
        width:70, 
        height:70,
    }
});