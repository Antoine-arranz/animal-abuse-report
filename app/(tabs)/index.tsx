import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import WarningSection from "../components/WarningSection";
import AlerteBandeau from "../components/AlertBandeau";
import Logo from "../components/Logo";
import Signalement from "../components/Signalement";

export default function Index() {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView>
        <Logo />
        <Header />
        <WarningSection />
        <AlerteBandeau />
        <Signalement />
      </ScrollView>
    </SafeAreaView>
  );
}
