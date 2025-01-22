import { useCallback, type PropsWithChildren } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as RNTheme,
} from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [fontsLoaded, fontError] = useFonts({
    Montserrat: require("@expo-google-fonts/montserrat/Montserrat_400Regular.ttf"),
    "Montserrat-Medium": require("@expo-google-fonts/montserrat/Montserrat_500Medium.ttf"),
    "Montserrat-SemiBold": require("@expo-google-fonts/montserrat/Montserrat_600SemiBold.ttf"),
    "Montserrat-Bold": require("@expo-google-fonts/montserrat/Montserrat_700Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View className='flex-1' onLayout={onLayoutRootView}>
      <RNTheme value={DefaultTheme}>{children}</RNTheme>
    </View>
  );
}
