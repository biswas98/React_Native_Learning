import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import Login from "./components/Login";
import TouchMe from "./components/TouchMe";
// import Test from './components/Test';
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      
	  <View style={styles.head}>
        <Header />
      </View>
      
	  <View style={styles.content}>
        <Login />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
	flexDirection: 'column',
    alignItems: "center",
	fontFamily: ''
  },

  head: {
	marginBottom: 40,
  },
  content: {
	width: '90%'
  }
});
