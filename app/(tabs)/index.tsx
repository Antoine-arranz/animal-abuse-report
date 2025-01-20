import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import WarningSection from "../components/WarningSection";
import AlerteBandeau from "../components/AlertBandeau";
import Logo from "../components/Logo";
import Signalement from "../components/Signalement";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Logo />
        <Header />
        <WarningSection />
        <AlerteBandeau />
        <Signalement />
        <View className="bg-custom-gradient py-6 px-4">
          <Text className="text-white text-center text-xl"> Que dit la loi</Text>
          <Text className="text-white text-center font-extrabold mt-4 text-xl">
            "Le fait, publiquement ou non, d'exercer des sévices graves ou de
            commettre un acte de cruauté envers un animal domestique ou un
            animal sauvage apprivoisé ou tenu en captivité, est puni de 3 ans de
            prison et de 45 000 € d'amende."
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
