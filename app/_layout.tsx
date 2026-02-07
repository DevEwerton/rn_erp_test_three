// Default inital layout...
// import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
// import { Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import "react-native-reanimated";

// import { useColorScheme } from "@/hooks/use-color-scheme";

// export const unstable_settings = { anchor: "(tabs)"};

// export default function RootLayout ()
// {
// 	const colorScheme = useColorScheme();

// 	return (
// 		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
// 			<Stack>
// 				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
// 				<Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
// 			</Stack>
// 			<StatusBar style="auto" />
// 		</ThemeProvider>
// 	);
// }

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import SplashScreenController from "../components/ui/splash";
import { SessionProvider, useSession } from "../context/AuthContext";

/**
 * NAVIGATION GUARD LOGIC EXPLANATION:
 * 
 * 1. PROTECTED ROUTES (Tabs):
 *    Goal: Open the "gate" ONLY if a session exists.
 *    - If session is "ABC123" (logged in): We need to pass TRUE.
 *    - Since "ABC123" is a string, we use double negation (!!).
 *    - !"ABC123" becomes false -> !!"ABC123" becomes TRUE.
 *    - Result: Tabs gate is OPEN. ✅
 * 
 * 2. PUBLIC ROUTES (Login):
 *    Goal: Open the "gate" ONLY if a session DOES NOT exist.
 *    - If session is null (logged out): We need to pass TRUE for the login gate to open.
 *    - !null becomes TRUE.
 *    - Result: Login gate is OPEN. ✅
 */
function RootNavigator ()
{
	const { session } = useSession();

	console.log("session: ", session);

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Protected guard={!!session}>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
			</Stack.Protected>

			<Stack.Protected guard={!session}>
				<Stack.Screen name="(auth)/login" />
			</Stack.Protected>
		</Stack>
	);
}

export default function Root ()
{
	return (
		<SessionProvider>
			<SplashScreenController />
			<RootNavigator />
			<StatusBar style="dark" />
		</SessionProvider>
	);
}