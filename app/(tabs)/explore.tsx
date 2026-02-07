import { useSession } from "@/context/AuthContext";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, } from "react-native-safe-area-context";

export default function Explorecreen ()
{
	const [loading] = useState<boolean>(false);
	const { signOut } = useSession();

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Todos os Clientes do ERP (teste 3)</Text>
			{loading && <Text>Wait... loading...</Text>}
			<TouchableOpacity
				onPress={signOut}
			>
				<Text>sair</Text>
			</TouchableOpacity>
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
