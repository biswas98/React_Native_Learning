import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function style() {
  return StyleSheet.create({
    container: {
      backgroundColor: "#DBC4F0",
      height: "60%",
      margin: 20,
      marginTop: 100,
      borderWidth: 5,
      borderColor: "#461959",
      alignItems: "center",
      justifyContent: "center",
    },

    textContainer: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 50,
      textAlign: "center",
      color: "#461959", // #322653
    },

    btn: {
      padding: 20,
      borderRadius: 50,
      backgroundColor: "#8062D6",
      elevation: 35,
    },
  });
}
