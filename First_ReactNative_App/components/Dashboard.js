import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Header from './Login'


export default function Dashboard(props) {

    const { name , age } = props.route.params;

    return (
        <View style={style.container}>
            <Text style={style.textContainer}>Name: {name}</Text>
            <Text style={style.textContainer}>Age: {age}</Text>
            <Button
                style={style.btn}
                title='Login'
                // onPress={()=> props.navigation.navigate('Login')}
                onPress={()=> props.navigation.goBack()} 
            />
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        height:'60%',
        margin: 20,
        borderWidth: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        
        marginBottom: 50,
        borderWidth: 3,
        borderColor: 'green',
        textAlign: 'center',
        fontSize: 20,
    },
    btn: {

    }
});
