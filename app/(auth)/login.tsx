import { useSession } from "@/context/AuthContext";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView, } from "react-native-safe-area-context";

interface User {
    email: string,
    password: string,
}

const mockUser = {
    email: "",
    password: "",
}

export default function ExploreScreen ()
{
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<User>(mockUser);
    const { signIn } = useSession();

    function handleLogin ()
    {
        signIn();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>LOGIN</Text>
            {loading && <Text>Wait... loading...</Text>}
            <TextInput
                value={user.email}
                style={styles.input}
                placeholder="name@mail.com"
                keyboardType="email-address"
            />
            <TouchableOpacity
                onPress={handleLogin}
            >
                <Text>Entrar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center",
        backgroundColor: '#fff',
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
    },
    input: {
        borderWidth: 2,
		borderColor: "black",
		width: "90%",
		borderRadius: 10,
		height: 40,
		marginBottom: 10,
		padding: 5
    }
});
