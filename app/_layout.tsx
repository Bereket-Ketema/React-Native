import { useColorScheme } from "@/app-example/hooks/use-color-scheme";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { TaskProvider } from "../context/TaskContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return(
    
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <TaskProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      </TaskProvider>
    </ThemeProvider>
  );
}