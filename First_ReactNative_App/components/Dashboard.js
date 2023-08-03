import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Header from './Login'


export default function Dashboard(props) {
    return (
        <View style={style.container}>
            <Text style={style.textContainer}> You are in the Dashboard screen</Text>
            <Button
                title='Login'
                color='grey'
                onPress={()=> props.navigation.navigate('Login')}
            />
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        
        marginBottom: 50,
        borderWidth: 3,
        borderColor: 'green',
        textAlign: 'center',
        fontSize: 20,
    }
});
