import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default AlertComponent = () => {
    

    
    return (
        <View>
            <TouchableOpacity>
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
    );
}

const mySheet = StyleSheet.create({
    btn: {
        borderWidth: 1,
        padding: 10,
    }
});