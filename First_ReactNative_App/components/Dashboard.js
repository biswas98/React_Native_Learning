import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// import Header from './Header'


export default function Dashboard() {
    return (
        <View style= {style.container}>
            <Text style={ style.textContainer }> You are in the Dashboard screen</Text>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '100%',
    },  
    textContainer:{
        borderWidth: 1,
        borderColor: 'Green',
        textAlign: 'center',
        fontSize: 20,
    }
});
