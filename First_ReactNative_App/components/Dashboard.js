import { View, Text, StyleSheet, Button, TouchableOpacity, Platform } from 'react-native'
import React from 'react'

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Header from './Login'


export default function Dashboard(props) {
    
    const { name, age } = props.route.params;

    return (
        <View style={style.container}>
            <Text style={style.textContainer}>Name: {name}</Text>
            <Text style={style.textContainer}>Age: {age}</Text>

            <TouchableOpacity
                style={style.btn}
                onPress={() => props.navigation.goBack()
                }>
                <Text style={{fontSize:25, fontWeight: 'bold', color: '#fff',}}>
                    Go back to login screen
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        height: '60%',
        margin: 20,
        marginTop: 100,
        borderWidth: 1,
        borderColor: "#461959",
        alignItems: 'center',
        justifyContent: 'center',
    },

    textContainer: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50,
        textAlign: 'center',
        color: '#461959', // #322653
    
    },

    btn: {
        padding: 20,
        borderRadius: 50,
        backgroundColor: '#8062D6',
        
    }
});
