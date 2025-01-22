import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignalementSection from "@/components/sections/SignalementSection";

export default function SignalementScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1'>
        <SignalementSection />
      </ScrollView>
    </SafeAreaView>
  );
}
