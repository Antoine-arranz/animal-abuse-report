import { Image } from "expo-image";
import { View } from "react-native";
import Text from "@/components/common/typography/Text";
import Title from "@/components/common/typography/Title";

export default function Header() {
  const image = require("@/assets/images/chat.jpg");

  return (
    <View className="h-[450px] w-full relative">
      <Image
        source={image}
        style={{ width: "100%", height: "100%" }}
        contentFit="cover"
      />
      <View className="absolute inset-0 flex items-center justify-between px-14 py-5">
        <Title>
          Animal maltraité ?
        </Title>
        <View>
          <Text variant="title" weight="medium" color="white" className="text-center">
            Alertez au
          </Text>
          <Text color="primary" variant="7xl" weight="bold">
            3677
          </Text>
        </View>
      </View>
    </View>
  );
} 