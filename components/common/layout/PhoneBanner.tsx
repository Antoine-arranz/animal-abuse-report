import { View, Pressable, Linking } from "react-native";
import Text from "@/components/common/typography/Text";
import { FontAwesome } from "@expo/vector-icons";
import { HELPLINE_NUMBER } from "@/utils/constants";
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';

export default function PhoneBanner() {
  const handlePress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Linking.openURL(`tel:${HELPLINE_NUMBER}`);
  };

  return (
    <LinearGradient
      colors={["#d41116", "#6a0927"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="py-2 px-4"
    >
      <Pressable 
        onPress={handlePress}
        className="flex-row items-center justify-center space-x-3"
      >
        <View className="flex-row items-center bg-white/20 px-4 py-2 rounded-full">
          <FontAwesome name="phone" size={20} color="white" />
          <Text 
            variant="subtitle" 
            weight="bold" 
            color="white" 
            className="ml-3"
          >
            {HELPLINE_NUMBER}
          </Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
}