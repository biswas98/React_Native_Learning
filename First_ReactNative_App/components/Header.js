import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

export default function () {
  return (
    <View style={headerStyle.container}>
        <Image source={require('../resources/logo.png')} style={headerStyle.logoRes}/>
        <Text style={headerStyle.heading}>Information</Text>
    </View>
  )
}

const headerStyle = StyleSheet.create({
    container: {
        // borderWidth: 1,
        padding: 20,
        width: '100%',
        height: '35%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#61677A',

    },

    logoRes: {
        marginLeft: 50,
        width:50, 
        height:50,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#fff'
    },
    heading: {
        marginRight: '25%',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    }
});