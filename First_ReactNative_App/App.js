import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import Login from './components/Login';
import TouchMe from './components/TouchMe';
import Test from './components/Test';
import AlertComponent from './components/AlertComponent';


export default function App() {
	return (
		<View style={styles.container}>

			{/* <Login /> */}

			{/* <TouchMe /> */}

			{/* <Test/> */}

			<AlertComponent />
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
