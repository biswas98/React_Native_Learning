import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function TouchMe() {

    const [currentValue, setCurrent] = useState(0);
    const update = () => setCurrent(currentValue+1); 
 
    
    return (

        <View style= {style.container}>

            <Text style= {{textAlign: 'center', padding: 20}}>{currentValue}</Text> 

            <TouchableOpacity style={style.touch} onPress={update}>
                <Text>Click Me</Text>
            </TouchableOpacity>

        </View>
    )
}
// Learning about States and Buttons.

const style = StyleSheet.create({
    container: {

    },

    touch: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 30,
        padding: 15,
    }
});