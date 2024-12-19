import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  /** loading fonts */
  const [fontsLoaded, fontsLoadingError] = useFonts({
    dosis: require("../assets/fonts/Dosis-Regular.ttf"),
    _: Ionicons.font /** preload all icons */
  });
  useEffect(() => {
    if (fontsLoaded || fontsLoadingError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsLoadingError]);

  if (!fontsLoaded && !fontsLoadingError) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="test" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
