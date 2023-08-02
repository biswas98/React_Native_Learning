import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

export default AlertComponent = () => {
    
    const customAlert= () => Alert.alert(
        'WoW',
        'After all you have clicked on the button',
        [{text: 'Want to close'}]
    );
    
    return (
        <View>
            <TouchableOpacity style={mySheet.btn} onPress={customAlert}>
                <Text style={{textAlign:'center'}}>Click</Text>
            </TouchableOpacity>
        </View>
    );
}

const mySheet = StyleSheet.create({
    btn: {
        width: 100,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
    }
});