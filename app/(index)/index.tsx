import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/common/layout/Header";
import WarningSection from "@/components/sections/WarningSection";
import AlerteBandeau from "@/components/AlertBandeau";
import Logo from "@/components/common/Logo";
import SignalementSection from "@/components/sections/SignalementSection";
import Text from "@/components/common/typography/Text";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Logo />
        <Header />
        <WarningSection />
        <AlerteBandeau />
        <SignalementSection />
        <View className="bg-gradient-primary py-6 px-4">
          <Text 
            variant="title" 
            color="white" 
            className="text-center"
          >
            Que dit la loi
          </Text>
          <Text 
            variant="title" 
            weight="bold" 
            color="white" 
            className="text-center mt-4"
          >
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
