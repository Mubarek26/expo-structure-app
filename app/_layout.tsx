import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "../global.css";
export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack>

      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}

      />

      <Stack.Screen
        name="movies/[id]"
        options={{ headerShown: false }}
      />
        </Stack>
    </SafeAreaProvider>
  );
}
