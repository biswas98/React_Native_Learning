import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import Login from './components/Login';
import TouchMe from './components/TouchMe';

export default function App() {
	return (
		<View style={styles.container}>

			{/* <Login /> */}

			<TouchMe />

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
