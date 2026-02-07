import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView, } from "react-native-safe-area-context";

export default function HomeScreen ()
{
	const [loading, setLoading] = useState<boolean>(false);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Cadastro de Cliente do ERP (teste 3)</Text>
			{loading && <Text>Wait... loading...</Text>}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		alignItems: "center",
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20
	},
});
