import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignalementSection from "@/components/sections/SignalementSection";
import { StatusBar } from "expo-status-bar";

export default function SignalementScreen() {
  return (
    <SafeAreaView className='flex-1 bg-primary'>
      <StatusBar style='light' backgroundColor='black' />
      <ScrollView className='flex-1'>
        <SignalementSection />
      </ScrollView>
    </SafeAreaView>
  );
}
