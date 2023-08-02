import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Login() {
    return (
        <View style={style.container}>
            <View style={style.SubContent}>
                <Text>Name: </Text>
                <TextInput style={style.input} />
            </View>

            <View style={style.SubContent}>
                <Text>Age:  </Text>
                <TextInput style={style.input} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 50,
        flexDirection: "column",
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
        borderColor: "red",
    },
});
