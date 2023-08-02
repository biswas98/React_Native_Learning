import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import Login from './components/Login';
import TouchMe from './components/TouchMe';
import Test from './components/Test';
import Header from './components/Header';


export default function App() {
	return (
		<View style={styles.container}>

			{/* <Login /> */}
			<Header />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
