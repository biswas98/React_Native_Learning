import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import Login from "./components/Login";
import Header from "./components/Header";
// import TouchMe from "./components/TouchMe";
// import Test from './components/Test';

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
	height: '100%',
    backgroundColor: "#fff",
	flexDirection: 'column',
    alignItems: "center",
	backgroundColor: '#F7F1E5'
  },

  head: {
	marginBottom: 10,
  },
  content: {
	width: '90%'
  }
});
