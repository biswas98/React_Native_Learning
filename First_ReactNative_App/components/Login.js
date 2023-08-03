import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useState } from "react";

import Dashboard from './Dashboard'
// import AlertComponent from "./AlertComponent";

export default function Login(props) {
    const [valueTextInput1, setValueTextInput1] = useState("");
    const [valueTextInput2, setValueTextInput2] = useState("");


    const myAlert = () => {
        Alert.alert(
            "User Credentials",
            "Name: " + valueTextInput1 + "\n" + "Age: " + valueTextInput2,
            [{
                text: "Dashboard",
                onPress: () => props.navigation.navigate('Dashboard')
            }]
        );
        setValueTextInput1('');
        setValueTextInput2('');
    };


    return (
        <View style={style.container}>
            <View style={style.SubContent}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#435B66' }}>Name: </Text>

                <TextInput
                    style={style.input}
                    placeholder="write your name"
                    onChangeText={(text) => setValueTextInput1(text)}
                    value={valueTextInput1}
                />
            </View>

            <View style={style.SubContent}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#435B66' }}>Age: </Text>
                <TextInput
                    style={style.input}
                    placeholder="enter your age"
                    onChangeText={(text) => setValueTextInput2(text)}
                    value={valueTextInput2}
                //   keyboardType='numeric'
                />
            </View>

            <View>
                <TouchableOpacity style={style.btn} onPress={myAlert}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#435B66' }}>Click</Text>
                </TouchableOpacity>
            </View>

            {/* <AlertComponent /> */}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        marginTop: 200,
        padding: 50,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: '#D8D9DA',
        borderRadius: 40,
        elevation: 30
    },

    SubContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 10,
    },

    input: {
        margin: 4,
        padding: 5,
        width: 200,
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: '#fff'
    },

    btn: {
        width: 100,
        // borderWidth: 1,
        padding: 7,
        borderRadius: 25,
        alignItems: "center",
        backgroundColor: '#FFF6E0',
        elevation: 5,

    },
});
